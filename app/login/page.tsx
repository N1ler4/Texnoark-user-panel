"use client";
import React from "react";
import Container from "../../components/container/page";
import { Button, Input, Form as AntForm } from "antd";
import { Formik, Field, Form as FormikForm } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import useAuthStore from "@/store/auth";
import { saveAccessToken , saveId} from "@/helpers/auth-helpers";
import { useRouter } from "next/navigation";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  phone_number: Yup.string().required("Telefon raqam is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function Index() {
  const { signIn } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    const res = await signIn(values);
    if (res && res.status === 201) {
      saveAccessToken(res.data.data.tokens.access_token)
      saveId(res.data.data.data.id)
      router.push("/")
      window.location.reload();
    }
  };

  return (
    
    <>
      <Container>
        <div className="flex gap-3 mt-5">
          <div className="px-[18px] py-[8px] rounded-md text-[#240E0066] bg-[#F5F5F5] grid justify-center items-center">
            Bosh sahifa
          </div>
          <div className="px-[18px] py-[8px] rounded-md text-[#240E0066] bg-[#F5F5F5] grid justify-center items-center">
            Smartfonlar
          </div>
          <div className="px-[18px] py-[8px] rounded-md text-[#240E00CC] bg-[#FFFFFF] grid justify-center items-center">
            Kirish
          </div>
        </div>
      </Container>
      <Container>
        <div className="grid justify-center items-center">
          <div className="w-[500px] h-[474px] bg-white mt-10 mb-10 flex flex-col justify-around items-center px-[50px] py-[60px]">
            <h1 className="text-[34px] font-black">Kirish</h1>
            <Formik
              initialValues={{ phone_number: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <FormikForm className="w-full">
                  <h3 className="text-[13px] font-normal mb-2">Telfon raqam</h3>
                  <AntForm.Item
                    validateStatus={
                      touched.phone_number && errors.phone_number ? "error" : ""
                    }
                    help={
                      touched.phone_number && errors.phone_number
                        ? errors.phone_number
                        : ""
                    }
                  >
                    <Field
                      name="phone_number"
                      as={Input}
                      className="h-[60px] w-full"
                      style={{ background: "#F0F0F0" }}
                      placeholder="+998"
                    />
                  </AntForm.Item>
                  <h3 className="text-[13px] font-normal mb-2">Password</h3>
                  <AntForm.Item
                    validateStatus={
                      touched.password && errors.password ? "error" : ""
                    }
                    help={
                      touched.password && errors.password ? errors.password : ""
                    }
                  >
                    <Field
                      name="password"
                      as={Input}
                      type="password"
                      className="h-[60px] w-full"
                      style={{ background: "#F0F0F0" }}
                      placeholder="Password"
                    />
                  </AntForm.Item>
                  <div className="flex flex-col gap-5 w-full">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="h-[50px]"
                      style={{
                        background: "#D55200",
                        border: "#D55200",
                        color: "#FFFFFF",
                      }}
                    >
                      Kirish
                    </Button>
                    <Link href="/signup" className="w-full">
                      <Button
                        className="h-[50px] w-full"
                        style={{
                          background: "#F0F0F0",
                          border: "#F0F0F0",
                          color: "#240E00CC",
                        }}
                      >
                        Ro’yhatdan o’tish
                      </Button>
                    </Link>
                  </div>
                </FormikForm>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </>
  );
}
