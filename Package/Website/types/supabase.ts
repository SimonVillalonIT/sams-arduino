export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      device: {
        Row: {
          classroom: string | null
          created_at: string | null
          id: string
        }
        Insert: {
          classroom?: string | null
          created_at?: string | null
          id?: string
        }
        Update: {
          classroom?: string | null
          created_at?: string | null
          id?: string
        }
        Relationships: []
      }
      historic_measures: {
        Row: {
          created_at: string | null
          data: number | null
          id: string
          id_sensor: string | null
        }
        Insert: {
          created_at?: string | null
          data?: number | null
          id?: string
          id_sensor?: string | null
        }
        Update: {
          created_at?: string | null
          data?: number | null
          id?: string
          id_sensor?: string | null
        }
        Relationships: []
      }
      sensor: {
        Row: {
          created_at: string | null
          data: number | null
          idDevice: string
          sensorNumber: number
        }
        Insert: {
          created_at?: string | null
          data?: number | null
          idDevice: string
          sensorNumber?: number
        }
        Update: {
          created_at?: string | null
          data?: number | null
          idDevice?: string
          sensorNumber?: number
        }
        Relationships: [
          {
            foreignKeyName: 'sensor_idDevice_fkey'
            columns: ['idDevice']
            referencedRelation: 'device'
            referencedColumns: ['id']
          },
        ]
      }
      user_device: {
        Row: {
          created_at: string | null
          id: string
          id_device: string | null
          id_user: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          id_device?: string | null
          id_user?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          id_device?: string | null
          id_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'user_device_id_device_fkey'
            columns: ['id_device']
            referencedRelation: 'device'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'user_device_id_user_fkey'
            columns: ['id_user']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      assign_classroom: {
        Args: {
          deviceid: string
          classroom: string
          uid: string
        }
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
      get_devices_by_user_id: {
        Args: {
          id_user: string
        }
        Returns: {
          device_id: string
        }[]
      }
      handle_sensor: {
        Args: {
          sensorid: number
          deviceid: string
          sound_level: number
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
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
