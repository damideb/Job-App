import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";
import { AuthBase } from "../../api/authBase";
import { useEffect } from "react";
import Loader from "../loader";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useError } from "../../hooks/error";
import useGlobalContext from "../../hooks/globalContext";

export default function DashboardLayout() {
  const { dispatch, loading, setLoading } = useGlobalContext()

  const {setError} = useError()

  useEffect(() => {
    const getUser = async function () {
      try {
        const response = await AuthBase.get("/user/getUser");
        const data = response;
        if (data.status === 200) {
          dispatch({
            type: "GetCurrentUser",
            payload: { user: data.data.user },
          });
        }
      } catch (err) {
        const error = err as AxiosError;
        if (!error.response) {
          // the error object does not contain a response when there is a network failure
          toast.error(
            "Network Error: Please check your internet connection and refresh."
          );
        }

        setError(`${error.message}. Please, dismiss to reload the app `);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" flex flex-col gap-5 ">
          <div className=" h-[100px]">
            <Header />
          </div>

          <section className=" flex justify-between">
            <Sidebar />
            <main className="md:w-[80%] w-full">
              <Outlet />
            </main>
          </section>
        </div>
      )}
    </>
  );
}
