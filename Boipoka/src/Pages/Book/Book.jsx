
import { Suspense } from 'react';
import BooksLibrary from './BooksLibrary';

const Book = ({data}) => {
    
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=>res.json())
    //     .then(data=>{setAllbooks(data)})
    // },[])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-10 lg:p-0'>
            <Suspense fallback={<span>Loading......... </span>}>
            {
                data.map((card,i)=><BooksLibrary key={i} card={card}></BooksLibrary>)
            }
            </Suspense>
            </div>
        </div>
    );
};

export default Book;