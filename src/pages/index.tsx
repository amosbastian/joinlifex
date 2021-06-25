import { getLayout } from "@/components/Layout";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import { Client } from "../../prismic-configuration";
import resolver from "../../sm-resolver.js";

const Home = (props: any) => {
  console.log(props);
  return <SliceZone {...props} resolver={resolver} />;
};

export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "page",
  queryType: "repeat",
  apiParams: {
    uid: "home",
  },
});

Home.getLayout = getLayout;

export default Home;
