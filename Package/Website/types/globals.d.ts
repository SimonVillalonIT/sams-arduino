import { Database as Db } from "./supabase";

declare global {
  type Database = Db;
  type NotificationTable = Db["public"]["Tables"]["notification"]["Row"];
  type ClassroomTable = Db["public"]["Tables"]["device"]["Row"];
  type UserTable = Db["public"]["Tables"]["users"]["Row"];
}
