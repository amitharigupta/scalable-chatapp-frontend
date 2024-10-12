import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";

export async function fetchChatGroup (token: string){
    const res = await fetch(CHAT_GROUP_URL, {
        headers: {
            Authorization: token
        },
        next: {
            revalidate: 60 * 60,
            tags: ['dashboard']
        }
    });

    if(!res.ok) {
        // throw `Failed to fetch chat group: ${res.status}`;
        // throw new Error("Failed to fetch data");
    }

    const response = await res.json();

    if(response?.data) {
        return response?.data;
    }

    return [];
}
