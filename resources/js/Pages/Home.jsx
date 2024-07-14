import { Link } from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <>
            {/* <h1 className="title">Welcome Home {name}</h1> */}
            {/* <Link preserveScroll href="/" className="block title mt-[1000px]">
                {new Date().toLocaleTimeString()}
            </Link> */}

            <h1 className="title">Welcome </h1>
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
