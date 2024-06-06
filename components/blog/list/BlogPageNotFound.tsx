import { Error } from "@/components/global/Error";

export const BlogPageNotFound = () => {
  return (
    <>
      <Error
        key={"blog data not found"}
        title="Oops! Data not found."
        subtitle="The requested data could not be found. Please check the URL or try
    again later."
      />
    </>
  );
};
