import SliceZone from "next-slicezone";
import { useGetStaticPaths, useGetStaticProps } from "next-slicezone/hooks";
import { Client } from "../../prismic-configuration";
import resolver from "../../sm-resolver.js";

const Page = (props: any) => <SliceZone {...props} resolver={resolver} />;

export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: "repeat",
  type: "page",
  apiParams({ params }: any) {
    return {
      uid: params.uid,
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "page",
  formatPath: (prismicDocument: any) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});

export default Page;
