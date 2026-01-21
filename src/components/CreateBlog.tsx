import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Button } from "./ui/button";
import { Input } from "./ui/input"; 
import { Textarea } from "./ui/textarea";


export default function CreateBlog() {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey:["blogs"]});
        },
    });

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        const form = e.target;

        mutation.mutate({
            title: form.title.value,
            description: form.description.value,
            coverImage: form.coverImage.value,
            content: form.content.value,
            category: ["TECH","FINANCE"],
            date: new Date().toISOString(),
        });
        form.reset();
    }
    return(
        <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <Input name="title" placeholder="Title" />
            <Input name="description" placeholder="Description" />
            <Input name="coverImage" placeholder="Image URL" required />
            <Textarea name="content" placeholder="Content" />
            <Button type="submit"> Create Blog </Button>
        </form>
    )
}