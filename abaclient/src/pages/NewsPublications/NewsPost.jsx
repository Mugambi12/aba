import Navbar from "../../Components/Navbar/Navbar";
import PageHeader from "../../Components/PageHeader/PageHeader";
import NewsArticle from "../../Components/NewsRoom/NewsPost/NewsArticle";
import Footer from "../../Components/Footer/Footer";

const NewsPost = () => {
  const headerData = {
    BgImg:
      "https://images.pexels.com/photos/2740844/pexels-photo-2740844.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=2:1&fm=jpg",
    title: "News Post",
    focus: "News Post",
  };

  const data = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      date: "1 hour ago",
      categories: ["Music", "Life"],
      content: [
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aspernatur aliquam iste earum vel natus dolorum nam, expedita molestiae sed, sapiente obcaecati quasi commodi laudantium cumque adipisci ducimus ipsa alias non neque recusandae debitis quis! Pariatur ipsam odio exercitationem ex nostrum ad maxime maiores rem harum iure earum voluptas eius dolorum doloribus animi ea sed natus sit, assumenda a facere praesentium. Id alias omnis harum voluptates possimus! Molestias blanditiis ex eligendi consequatur molestiae.",
        },
        {
          type: "subtitle",
          value: "Nemo quidem fugiat deleniti perspiciatis.",
        },
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aspernatur aliquam iste earum vel natus dolorum nam, expedita molestiae sed, sapiente obcaecati quasi commodi laudantium cumque adipisci ducimus ipsa alias non neque recusandae debitis quis! Pariatur ipsam odio exercitationem ex nostrum ad maxime maiores rem harum iure earum voluptas eius dolorum doloribus animi ea sed natus sit, assumenda a facere praesentium. Id alias omnis harum voluptates possimus! Molestias blanditiis ex eligendi consequatur molestiae.",
        },
        {
          type: "image",
          value:
            "https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=1:1&fm=jpg",
          caption:
            "Image of a Woman Holding Tomatoes by cottonbro on Pexels.com",
        },
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aspernatur aliquam iste earum vel natus dolorum nam, expedita molestiae sed, sapiente obcaecati quasi commodi laudantium cumque adipisci ducimus ipsa alias non neque recusandae debitis quis! Pariatur ipsam odio exercitationem ex nostrum ad maxime maiores rem harum iure earum voluptas eius dolorum doloribus animi ea sed natus sit, assumenda a facere praesentium. Id alias omnis harum voluptates possimus! Molestias blanditiis ex eligendi consequatur molestiae.",
        },
        {
          type: "image",
          value:
            "https://images.pexels.com/photos/15424312/pexels-photo-15424312.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=1:1&fm=jpg",
          caption:
            "Image of Boy Sitting on Sack on Outdoor Market by DarkShades on Pexels.com",
        },
        {
          type: "text",
          value:
            "Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit.",
        },
        {
          type: "text",
          value:
            "Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit. Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit.",
        },
        {
          type: "subtitle",
          value: "Nemo quidem fugiat deleniti perspiciatis.",
        },
        {
          type: "text",
          value:
            "Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit. Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit.",
        },
        {
          type: "image",
          value:
            "https://images.pexels.com/photos/2063892/pexels-photo-2063892.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=1:1&fm=jpg",
          caption:
            "Image of Banana Trees Under Clear Sky, Arusha, Arusha Region, Tanzania by Pixabay on Pexels.com",
        },
        {
          type: "text",
          value:
            "Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit. Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit.",
        },
        {
          type: "text",
          value:
            "Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit. Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit.",
        },
        {
          type: "image",
          value:
            "https://images.pexels.com/photos/1486976/pexels-photo-1486976.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=1:1&fm=jpg",
          caption:
            "Image of Photo of Field Full of Pumpkins, Maple Ridge, BC, Canada by James Wheeler on Pexels.com",
        },
        {
          type: "text",
          value:
            "Nemo quidem fugiat deleniti perspiciatis. Corporis ratione asperiores, sint quo deserunt quaerat nam. Totam cumque deserunt expedita est ea unde aliquam aut repellat ex ducimus similique assumenda distinctio, voluptas id porro repellendus praesentium sint reprehenderit vero dolores vel sequi tempore velit. Nemo quidem fugiat deleniti perspiciatis.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader headerData={headerData} />
      <NewsArticle
        title={data[0].title}
        date={data[0].date}
        categories={data[0].categories}
        content={data[0].content}
      />
      <Footer />
    </>
  );
};

export default NewsPost;
