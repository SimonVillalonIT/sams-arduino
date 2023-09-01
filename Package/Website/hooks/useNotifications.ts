import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import { getUserId } from "@/utils/supabase";
import useAlertStore from "@/store/alertStore";

export default function useNotifications() {
  const supabase = createClientComponentClient<Database>();
  const { setAlert } = useAlertStore();

  const [notifications, setNotifications] = useState<
    Database["public"]["Tables"]["notification"]["Row"][] | []
  >([]);

  const getNotifications = async () => {
    const { data, error } = await supabase
      .from("notification")
      .select("*")
      .eq("accepted", false)
      .filter("id_user", "eq", await getUserId());
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
      console.log(data);
      setNotifications(
        notifications.filter((n) => n.id_device !== notification.device_id),
      );
    }
  };

  const deny = async (
    data: Database["public"]["Tables"]["notification"]["Row"],
  ) => {
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
