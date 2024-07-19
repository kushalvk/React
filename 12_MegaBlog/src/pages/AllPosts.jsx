import service from '../appwrite/config'
import { Container, PostCard } from '../components';
import {useState, useEffect} from 'react';

function AllPosts() {

    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        
    }, []);

    service.getPost([]).then((Posts) => {
        if (Posts) {
            setPosts.apply(Posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {Posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
