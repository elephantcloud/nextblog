type Post = {
    titile: string;
    content: string;
    tiktok_video: string;
};

async function getPosts() {

}

export async function PostGrid() {
    const posts = await getPosts();

    console.log(posts);

    return (
        <div>
            <h1>Post Grid</h1>
        </div>
    );
}
