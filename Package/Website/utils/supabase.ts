import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient<Database>();

export const getUserId = async () => {
  const user = await supabase.auth.getUser();
  const id = user.data.user?.id as string;
  return id;
};

export const deleteClassroom = async (id: string) => {
  try {
    const { error } = await supabase.from("device").delete().eq("id", id);
    console.log(error);
  } catch (e) {
    console.log(e);
  }
};

export const fetchUsers = async (text: string, classroomId: string) => {
  const { data } = await supabase.rpc("fetch_users", {
    text_value: text,
    classroom_id: classroomId,
  });
  return data;
};

export const insertNotification = async (
  users: UserTable[],
  classroom: string,
) => {
  for (let user of users) {
    const { error } = await supabase
      .from("notification")
      .insert({ id_user: user.id, id_device: classroom });
    return error;
  }
};

export function getAverages(array: any) {
  const averages = [];
  let subArray: any = [];
  let pastTime: any = null;
  let counter = 0;

  array.forEach((device: any) => {
    const actualTime = new Date(device.updated_at).getTime();
    if (!actualTime) return;
    else if (
      subArray.length === 0 ||
      counter >= 10 ||
      (pastTime && actualTime - pastTime > 600000)
    ) {
      // 600000 milisegundos = 10 minutos
      if (subArray.length > 0) {
        const average = getSensorsAverage(subArray);
        averages.push({
          id: device.id,
          id_device: device.id_device,
          sensor1: average[0],
          sensor2: average[1],
          sensor3: average[2],
          sensor4: average[3],
          sensor5: average[4],
          sensor6: average[5],
          updated_at: device.updated_at,
        });
      }
      subArray = [];
      counter = 0;
    }
    const values = [
      device.sensor1,
      device.sensor2,
      device.sensor3,
      device.sensor4,
      device.sensor5,
      device.sensor6,
    ];
    subArray.push(values);
    counter++;
    pastTime = actualTime;
  });

  if (subArray.length > 0) {
    const average = getSensorsAverage(subArray);
    averages.push({
      id: array[array.length - 1].id,
      id_device: array[array.length - 1].id_device,
      sensor1: average[0],
      sensor2: average[1],
      sensor3: average[2],
      sensor4: average[3],
      sensor5: average[4],
      sensor6: average[5],
      updated_at: array[array.length - 1].updated_at,
    });
  }

  return averages;
}

function getSensorsAverage(subArray: any) {
  const average = Array(6).fill(null);

  for (let i = 0; i < 6; i++) {
    const temp = subArray.reduce(
      (total: any, values: any) => total + values[i],
      0,
    );
    average[i] = temp / subArray.length;
  }

  return average;
}
