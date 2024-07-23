import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import { useState } from "react";

export default function Home({ posts }) {
    // console.log(posts);

    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();

    const [flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    console.log(usePage());

    return (
        <>
            {/* <h1 className="title">Welcome Home {name}</h1> */}
            {/* <Link preserveScroll href="/" className="block title mt-[1000px]">
                {new Date().toLocaleTimeString()}
            </Link> */}

            <Head title={component} />

            <h1 className="title">Welcome </h1>

            {flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            )}

            {flash.success && (
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flash.success}
                </div>
            )}

            <div>
                {/* {posts.map((post) => ( */}
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleDateString()}{" "}
                            </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}{" "}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        {/* <Link href={`/posts/${post.id}`} className="text-link">
                            Read more...
                        </Link> */}

                        <Link
                            href={route("posts.show", post)}
                            className="text-link"
                        >
                            Read more...
                        </Link>
                    </div>
                ))}

                <div className="py-12 px-4">
                    {posts.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                // className="p1 mx-1"
                                className={`p-1 mx-1 ${
                                    link.active ? "text-blue-500 font-bold" : ""
                                }`}
                            />
                        ) : (
                            //greyed out last pagination
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                // className="p1 mx-1"
                                className="p-1 mx-1 text-slate-300"
                            ></span>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

// import Layout from "../Layouts/Layout";

// function Home({name}) {
//     return (
//         <>
//             <h1 className="title">Welcome Home {name}</h1>
//         </>
//     );
// }

// Home.layout = page => <Layout children = {page} />

// export default Home
