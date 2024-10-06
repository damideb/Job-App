import { Outlet } from 'react-router';
import Header from './header';
import Sidebar from './sidebar';
import { AuthBase } from '../../api/authBase';
import { useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../authContext/context";
import { AuthContextProvider } from "../../types/types";
import Loader from '../loader';

export default function DashboardLayout() {

    const { dispatch, loading, setLoading } = useContext(AuthContext) as AuthContextProvider;
    

  useEffect(()=>{
    const getUser = async function(){
      try{
      const response = await AuthBase.get('/user/getUser')
      const data = response;
      if (data.status === 200) {
        dispatch({
          type: "GetCurrentUser",
          payload: { user: data.data.user },
        });
      }
      console.log(data.data.user);
      }
      catch(error){
        console.error(error)
      }   
      
      finally{
        setLoading(false)
      }
    }
    getUser()
  },[])

  return (
    <>
    { loading ? <Loader/>:
      <div className=" flex flex-col gap-5 ">
        <div className=" h-[100px]">
          <Header />
        </div>

        <section className=" flex justify-between">
          <Sidebar />
          <main className="w-[80%]">
            <Outlet />
          </main>
        </section>
      </div>

      }
    </>
  );
}
