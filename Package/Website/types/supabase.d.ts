type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

interface Database {
  public: {
    Tables: {
      device: {
        Row: {
          classroom: string | null;
          created_at: string | null;
          id: string;
          sensor1: number | null;
          sensor2: number | null;
          sensor3: number | null;
          sensor4: number | null;
          sensor5: number | null;
          sensor6: number | null;
        };
        Insert: {
          classroom?: string | null;
          created_at?: string | null;
          id?: string;
          sensor1?: number | null;
          sensor2?: number | null;
          sensor3?: number | null;
          sensor4?: number | null;
          sensor5?: number | null;
          sensor6?: number | null;
        };
        Update: {
          classroom?: string | null;
          created_at?: string | null;
          id?: string;
          sensor1?: number | null;
          sensor2?: number | null;
          sensor3?: number | null;
          sensor4?: number | null;
          sensor5?: number | null;
          sensor6?: number | null;
        };
        Relationships: [];
      };
      historic_measures: {
        Row: {
          created_at: string | null;
          data: number | null;
          id: string;
          id_sensor: string | null;
        };
        Insert: {
          created_at?: string | null;
          data?: number | null;
          id?: string;
          id_sensor?: string | null;
        };
        Update: {
          created_at?: string | null;
          data?: number | null;
          id?: string;
          id_sensor?: string | null;
        };
        Relationships: [];
      };
      user_device: {
        Row: {
          created_at: string | null;
          id: string;
          id_device: string | null;
          id_user: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          id_device?: string | null;
          id_user?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          id_device?: string | null;
          id_user?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "user_device_id_device_fkey";
            columns: ["id_device"];
            referencedRelation: "device";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "user_device_id_user_fkey";
            columns: ["id_user"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      assign_classroom: {
        Args: {
          deviceid: string;
          classroom: string;
          uid: string;
        };
        Returns: undefined;
      };
      create_classroom: {
        Args: {
          deviceid: string;
          classroomname: string;
          uid: string;
        };
        Returns: undefined;
      };
      get_devices_by_user_id: {
        Args: {
          id_user: string;
        };
        Returns: {
          device_id: string;
        }[];
      };
      handle_sensor:
        | {
            Args: {
              sensorid: number;
              deviceid: string;
              sound_level: number;
            };
            Returns: undefined;
          }
        | {
            Args: {
              deviceid: string;
              sensor1: number;
              sensor2: number;
              sensor3: number;
              sensor4: number;
              sensor5: number;
              sensor6: number;
            };
            Returns: undefined;
          };
      insert_device_and_return_id:
        | {
            Args: {
              device_id: string;
            };
            Returns: {
              id: string;
            }[];
          }
        | {
            Args: Record<PropertyKey, never>;
            Returns: {
              id: string;
            }[];
          };
      insert_or_update_sensor: {
        Args: {
          sensorid: number;
          deviceuuid: string;
          sound_level: number;
        };
        Returns: undefined;
      };
      insert_or_update_sensor_data:
        | {
            Args: {
              sensorid: number;
              deviceid: number;
              sound_level: number;
            };
            Returns: undefined;
          }
        | {
            Args: {
              sensorId: string;
              deviceId: number;
              sound_level: number;
            };
            Returns: undefined;
          }
        | {
            Args: {
              sensorId: string;
              deviceId: string;
              sound_level: number;
            };
            Returns: undefined;
          }
        | {
            Args: {
              sensorid: number;
              deviceid: string;
              sound_level: number;
            };
            Returns: undefined;
          };
      insert_or_update_sensor_data_v2: {
        Args: {
          sensorid: number;
          deviceuuid: string;
          sound_level: number;
        };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
