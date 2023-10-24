export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      device: {
        Row: {
          active: boolean
          classroom: string | null
          created_at: string | null
          id: string
          sensor1: number
          sensor2: number
          sensor3: number
          sensor4: number
          sensor5: number
          sensor6: number
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          classroom?: string | null
          created_at?: string | null
          id?: string
          sensor1?: number
          sensor2?: number
          sensor3?: number
          sensor4?: number
          sensor5?: number
          sensor6?: number
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          classroom?: string | null
          created_at?: string | null
          id?: string
          sensor1?: number
          sensor2?: number
          sensor3?: number
          sensor4?: number
          sensor5?: number
          sensor6?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      history: {
        Row: {
          id: string
          id_device: string
          sensor1: number | null
          sensor2: number | null
          sensor3: number | null
          sensor4: number | null
          sensor5: number | null
          sensor6: number | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          id_device: string
          sensor1?: number | null
          sensor2?: number | null
          sensor3?: number | null
          sensor4?: number | null
          sensor5?: number | null
          sensor6?: number | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          id_device?: string
          sensor1?: number | null
          sensor2?: number | null
          sensor3?: number | null
          sensor4?: number | null
          sensor5?: number | null
          sensor6?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "history_id_device_fkey"
            columns: ["id_device"]
            referencedRelation: "device"
            referencedColumns: ["id"]
          }
        ]
      }
      notification: {
        Row: {
          accepted: boolean | null
          id: string
          id_device: string
          id_user: string | null
        }
        Insert: {
          accepted?: boolean | null
          id?: string
          id_device: string
          id_user?: string | null
        }
        Update: {
          accepted?: boolean | null
          id?: string
          id_device?: string
          id_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_id_device_fkey"
            columns: ["id_device"]
            referencedRelation: "device"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_id_user_fkey"
            columns: ["id_user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_device: {
        Row: {
          created_at: string | null
          id: string
          id_device: string | null
          id_user: string | null
          is_admin: boolean
        }
        Insert: {
          created_at?: string | null
          id?: string
          id_device?: string | null
          id_user?: string | null
          is_admin?: boolean
        }
        Update: {
          created_at?: string | null
          id?: string
          id_device?: string | null
          id_user?: string | null
          is_admin?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "user_device_id_device_fkey"
            columns: ["id_device"]
            referencedRelation: "device"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_device_id_user_fkey"
            columns: ["id_user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          email: string | null
          id: string
        }
        Insert: {
          email?: string | null
          id: string
        }
        Update: {
          email?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      accept_notification: {
        Args: {
          user_id: string
          device_id: string
        }
        Returns: undefined
      }
      assign_classroom:
        | {
            Args: {
              user_id: string
              device_id: string
            }
            Returns: undefined
          }
        | {
            Args: {
              deviceid: string
              classroom: string
              uid: string
            }
            Returns: undefined
          }
      copy_existing_users: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      create_classroom: {
        Args: {
          deviceid: string
          classroomname: string
          uid: string
        }
        Returns: undefined
      }
      fetch_notifications: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          id_user: string
          id_device: string
          classroom: string
          email: string
        }[]
      }
      fetch_users: {
        Args: {
          text_value: string
          classroom_id: string
        }
        Returns: {
          id: string
          email: string
        }[]
      }
      get_devices_by_user_id: {
        Args: {
          id_user: string
        }
        Returns: {
          device_row: unknown
        }[]
      }
      handle_sensor: {
        Args: {
          deviceid: string
          sensor1: number
          sensor2: number
          sensor3: number
          sensor4: number
          sensor5: number
          sensor6: number
        }
        Returns: undefined
      }
      insert_device_and_return_id:
        | {
            Args: {
              device_id: string
            }
            Returns: {
              id: string
            }[]
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: {
              id: string
            }[]
          }
      insert_notification_if_not_exists: {
        Args: {
          user_id: string
          device_id: string
        }
        Returns: undefined
      }
      insert_or_update_sensor: {
        Args: {
          sensorid: number
          deviceuuid: string
          sound_level: number
        }
        Returns: undefined
      }
      insert_or_update_sensor_data:
        | {
            Args: {
              sensorid: number
              deviceid: number
              sound_level: number
            }
            Returns: undefined
          }
        | {
            Args: {
              sensorId: string
              deviceId: number
              sound_level: number
            }
            Returns: undefined
          }
        | {
            Args: {
              sensorId: string
              deviceId: string
              sound_level: number
            }
            Returns: undefined
          }
        | {
            Args: {
              sensorid: number
              deviceid: string
              sound_level: number
            }
            Returns: undefined
          }
      insert_or_update_sensor_data_v2: {
        Args: {
          sensorid: number
          deviceuuid: string
          sound_level: number
        }
        Returns: undefined
      }
      search_users: {
        Args: {
          classroom_id: string
          user_id: string
        }
        Returns: {
          id: string
          email: string
        }[]
      }
      update_and_insert_notification: {
        Args: {
          user_id: string
          device_id: string
        }
        Returns: Json
      }
      update_notification_and_insert_user_device: {
        Args: {
          user_id: number
          device_id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
