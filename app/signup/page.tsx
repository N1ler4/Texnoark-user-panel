"use client";
import React from "react";
import Container from "../../components/container/page";
import { Button, Input, Form as AntForm } from "antd";
import Link from "next/link";
import useAuthStore from "@/store/auth";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Index() {
  const { signUp } = useAuthStore();
  const route = useRouter();

  const SignupSchema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    phone_number: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      const res = await signUp({
        first_name: values.first_name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        email: values.email,
        password: values.password,
      });
      if (res && res.status === 200) {
        route.push("/");
      }
    } catch (error) {
      console.error(error);
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
          <div className="w-[500px] h-[auto ] bg-white mt-10 mb-10 flex flex-col justify-around items-center px-[50px] py-[60px]">
            <h1 className="text-[34px] font-black">Ro‘hatdan o‘tish</h1>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                phone_number: "",
                email: "",
                password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <AntForm
                  className="w-full flex flex-col gap-5"
                  onFinish={handleSubmit}
                >
                  <h1>Ism</h1>
                  <AntForm.Item
                    validateStatus={
                      errors.first_name && touched.first_name ? "error" : ""
                    }
                    help={
                      errors.first_name && touched.first_name
                        ? errors.first_name
                        : null
                    }
                  >
                    <Field
                      name="first_name"
                      as={Input}
                      className="h-[60px] w-full"
                      style={{ background: "#F0F0F0" }}
                    />
                  </AntForm.Item>
                  <h1>Familya</h1>

                  <AntForm.Item
                    validateStatus={
                      errors.last_name && touched.last_name ? "error" : ""
                    }
                    help={
                      errors.last_name && touched.last_name
                        ? errors.last_name
                        : null
                    }
                  >
                    <Field
                      name="last_name"
                      as={Input}
                      className="h-[60px] w-full"
                      style={{ background: "#F0F0F0" }}
                    />
                  </AntForm.Item>
                  <h1>Telfon raqam</h1>

                  <AntForm.Item
                    validateStatus={
                      errors.phone_number && touched.phone_number ? "error" : ""
                    }
                    help={
                      errors.phone_number && touched.phone_number
                        ? errors.phone_number
                        : null
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
                  <h1>Email</h1>

                  <AntForm.Item
                    label=""
                    validateStatus={
                      errors.email && touched.email ? "error" : ""
                    }
                    help={errors.email && touched.email ? errors.email : null}
                  >
                    <Field
                      name="email"
                      as={Input}
                      className="h-[60px] w-full"
                      style={{ background: "#F0F0F0" }}
                    />
                  </AntForm.Item>
                  <h1>Parol</h1>
                  <AntForm.Item
                    validateStatus={
                      errors.password && touched.password ? "error" : ""
                    }
                    help={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  >
                    <Field
                      name="password"
                      as={Input.Password}
                      className="h-[60px] w-full"
                      style={{ background: "#F0F0F0" }}
                    />
                  </AntForm.Item>
                  <div className="flex flex-col gap-5 w-full">
                    <Button
                      htmlType="submit"
                      className="h-[50px]"
                      style={{
                        background: "#D55200",
                        border: "#D55200",
                        color: "#FFFFFF",
                      }}
                    >
                      Ro’yhatdan o’tish
                    </Button>
                    <Link href="/login">
                      <Button
                        className="h-[50px] w-full"
                        style={{
                          background: "#F0F0F0",
                          border: "#F0F0F0",
                          color: "#240E00CC",
                        }}
                      >
                        Kirish
                      </Button>
                    </Link>
                  </div>
                </AntForm>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </>
  );
}
