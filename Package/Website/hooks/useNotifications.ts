import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";

export default function useNotifications() {
  const supabase = createClientComponentClient<Database>();

  const [notifications, setNotifications] = useState<
    Database["public"]["Functions"]["fetch_notifications"]["Returns"]
  >([]);

  const getNotifications = async () => {
    const { data, error } = await supabase.rpc("fetch_notifications");
    if (error) {
      setNotifications([]);
      console.log(error);
    }
    if (data) setNotifications(data);
  };

  const accept = async (
    notification: Database["public"]["Functions"]["accept_notification"]["Args"],
  ) => {
    const { data, error } = await supabase.rpc("accept_notification", {
      device_id: notification.device_id as string,
      user_id: notification.user_id as string,
    });
    if (error) console.log(error);
    if (data) {
      setNotifications(
        notifications.filter((n) => n.id_device !== notification.device_id),
      );
    }
  };

  const deny = async (data: { id_device: string; id: string }) => {
    const { error } = await supabase
      .from("notification")
      .delete()
      .eq("id", data.id);
    console.log(error);
    setNotifications(
      notifications.filter((n) => n.id_device !== data.id_device),
    );
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return {
    notifications,
    accept,
    deny,
  };
}
