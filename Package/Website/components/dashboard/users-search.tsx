import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface User {
  id: string;
  email: string;
}

const supabase = createClientComponentClient<Database>();

export default function TicketsPage() {
  const fetchTickets = async () => {
    const from = 
    const to = from + PAGE_COUNT - 1;

    const { data } = await supabase!
      .from("my_tickets_table")
      .select("*")
      .range(from, to)
      .order("createdAt", { ascending: false });

    return data;
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true} // Replace with a condition based on your data source
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
