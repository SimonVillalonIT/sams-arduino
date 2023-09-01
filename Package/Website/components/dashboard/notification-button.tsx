"use client";
import useNotifications from "@/hooks/useNotifications";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiCheck, HiX } from "react-icons/hi";

const NotificationButton = () => {
  const [toggle, setToggle] = useState(false);
  const { notifications, accept, deny } = useNotifications();
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-ghost btn-circle"
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="badge badge-xs badge-primary indicator-item">
            <p className="text-[10px]">{notifications.length}</p>
          </span>
        </div>
      </button>
      <div className="toast top-14 toast-end">
        {toggle
          ? notifications.map((n) => (
              <div key={n.id} className="alert alert-info">
                <span>{n.id_device}</span>
                <HiCheck
                  onClick={() => {
                    accept({
                      device_id: n.id_device,
                      user_id: n.id_user as string,
                    });
                    router.refresh();
                  }}
                />
                <HiX onClick={() => deny(n)} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default NotificationButton;
