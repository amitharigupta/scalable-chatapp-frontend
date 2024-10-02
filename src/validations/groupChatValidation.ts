import { title } from "process";
import { z } from "zod";

export const createChatSchema = z.object({
    title: z.string().min(4, { message: "Chat title must be 4 characters long." }).max(20, { message: "Chat title must be less than 20 Characters" }),
    passcode: z.string().min(4, { message: "Chat passcode must be 4 characters long." }).max(10, { message: "Chat passcode must be 10 characters long." }),
}).required();

export type createChatSchemaType = z.infer<typeof createChatSchema>;
