"use client";

import { useContext, useRef } from "react";

import { ResumeForm } from "@/components/resume-form";
import ReactToPrint from "react-to-print";
import AnotheResume from "@/components/anotherTemplate/anotherTemplate";
import Layout from "@/components/anotherTemplate/layout";
import { useRouter } from "next/navigation";
import { useResumeFormContext } from "@/context";
import ThemeContext from "@/themecontext";

const IndexPage = () => {
  const router = useRouter();
  const componentRef = useRef();
  const [theme] = useContext(ThemeContext);
  const { values } = useResumeFormContext();
  return (
    <div className="flex">
      <div className="w-2/5">
        <ResumeForm />
      </div>

      <div className="w-3/5">
        <ReactToPrint
          trigger={() => (
            <button
              className={` font-bold py-2 px-4 rounded float-right focus:outline-none mb-2 text-[red]`}
            >
              Print this out!
            </button>
          )}
          content={() => componentRef.current}
        />
        <Layout>
          <div
            style={{
              border: `${theme} solid`
            }}
          >
            <AnotheResume ref={componentRef} theme={theme} />
          </div>
        </Layout>
      </div>
    </div>
  );
};
export default IndexPage;
