"use client";
import React, { useEffect, useState } from "react";
import Container from "../../components/container/page";
import { Form, Radio, Input, Select, Button } from "antd";
import Image from "next/image";
// import Pasport1 from "@/images/passport (1).png";
// import Pasport2 from "@/images/passport (2).png";
import "./style.css";
import Link from "next/link";
import Swiper from "@/components/swiper/page";

const { Option } = Select;

function Page() {
  const [selectRadio, setSelectRadio] = useState(false);

  async function handleSubmit(value: any) {
    console.log(value);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const validatePhoneNumber = (_: any, value: any) => {
    if (!value || value.startsWith("+998")) {
      return Promise.resolve();
    }
    return Promise.reject("Phone Number must start with +998");
  };

  return (
    <div>
      <Container>
        <p className="flex gap-[20px] mt-[20px]">
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Bosh sahifa
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
            Smartfonlar
          </span>
          <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
            Xaridni rasmiylashtirish
          </span>
        </p>
      </Container>

      <div className="mt-[28px]">
        <Container>
          <div className="flex justify-between max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:gap-[30px]">
            <div className="w-[900px] bg-[white] p-[44px] rounded-md">
              <Form onFinish={handleSubmit}>
                <Form.Item
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      message: "Phone number is required",
                    },
                    {
                      validator: validatePhoneNumber,
                    },
                  ]}
                >
                  <Input
                    placeholder="Please enter your Phone number"
                    style={{ width: "380px", height: "50px" }}
                  />
                </Form.Item>
                <Form.Item
                  name="full_name"
                  rules={[
                    {
                      required: true,
                      message: "Full Name is required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Please enter your Full Name"
                    style={{ width: "380px", height: "50px" }}
                  />
                </Form.Item>
                <Form.Item name="delivery_method">
                  <Radio.Group
                    defaultValue="1"
                    className="flex flex-col gap-[7px] mt-[12px]"
                  >
                    <Radio
                      className="text-[18px] text-[#240E00CC] font-medium"
                      value="1"
                    >
                      Do’kondan olib ketish
                    </Radio>
                    <Radio
                      className="text-[18px] text-[#240E00CC] font-medium"
                      value="2"
                    >
                      Xaridingizni uyingizga yetkazib berish
                    </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="region"
                  rules={[
                    {
                      required: true,
                      message: "Manzilingizni kiriting!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Siz qaysi viloyatdansiz?"
                    style={{ width: "380px", height: "50px", marginTop: 20 }}
                  >
                    <Option value="toshkent">Toshkent</Option>
                    <Option value="sirdaryo">Sirdaryo</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Manzilingizni kiriting!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Siz qaysi tumanidansiz?"
                    style={{ width: "380px", height: "50px", marginTop: 20 }}
                  >
                    <Option value="guliston">Guliston</Option>
                    <Option value="sergeli">Sergeli</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Aniq manzilni kiriting!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Tinchlik mahallasi Yoshlik-1 ko’chasi 12-uy"
                    style={{ width: "560px", height: "50px" }}
                  />
                </Form.Item>
                <Form.Item
                  name="time"
                  rules={[
                    {
                      required: true,
                      message: "Yetkazib berish vaqtini kiriting!",
                    },
                  ]}
                >
                  <Input
                    placeholder="01/24"
                    style={{ width: "220px", height: "50px" }}
                  />
                </Form.Item>
                <Form.Item name="payment_method">
                  <Radio.Group
                    defaultValue="1"
                    className="flex flex-col gap-[7px] mt-[12px]"
                  >
                    <Radio
                      className="text-[18px] text-[#240E00CC] font-medium"
                      value="1"
                      onChange={() => setSelectRadio(false)}
                    >
                      Naqtd yetkazgandan so’ng to’lash
                    </Radio>
                    <Radio
                      className="text-[18px] text-[#240E00CC] font-medium"
                      value="2"
                      onChange={() => setSelectRadio(false)}
                    >
                      Karta orqali ( Humo/Uzcard/Visa/)
                    </Radio>
                    <Radio
                      className="text-[18px] text-[#240E00CC] font-medium"
                      value="3"
                      onChange={() => setSelectRadio(true)}
                    >
                      Muddatli to’lov (4/6/12/24 oyga)
                    </Radio>
                  </Radio.Group>
                </Form.Item>
                {selectRadio && (
                  <>
                    <Form.Item name="installment_plan">
                      <Radio.Group
                        defaultValue="1"
                        className="flex gap-[7px] mt-[36px]"
                      >
                        <Radio
                          className="text-[18px] text-[#240E00CC] font-medium"
                          value="4"
                        >
                          4/oy
                        </Radio>
                        <Radio
                          className="text-[18px] text-[#240E00CC] font-medium"
                          value="6"
                        >
                          6/oy
                        </Radio>
                        <Radio
                          className="text-[18px] text-[#240E00CC] font-medium"
                          value="9"
                        >
                          9/oy
                        </Radio>
                        <Radio
                          className="text-[18px] text-[#240E00CC] font-medium"
                          value="12"
                        >
                          12/oy
                        </Radio>
                        <Radio
                          className="text-[18px] text-[#240E00CC] font-medium"
                          value="24"
                        >
                          24/oy
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                    <div className="w-[290px] py-[14px] px-[16px] border border-[#D55200] rounded-xl mt-[24px]">
                      <p className="text-[18px] font-medium">
                        6 oy / oyiga 6 879 789 so‘mdan
                      </p>
                    </div>
                    <div className="flex items-center gap-[24px] mt-[24px]">
                      {/* <Image src={Pasport2} alt="Passport2" /> */}
                      {/* <Image src={Pasport1} alt="Passport1" /> */}
                    </div>
                  </>
                )}
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{background : "#d55200" , border : "#d55200"}}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="w-[440px] h-[100%] p-[40px] bg-white rounded-xl max-sm:w-[350px]">
              <h4 className="font-bold text-[24px] mb-[17px]">
                Sizni haridlaringiz
              </h4>
              <p className="#240E00CC text-[16px]">
                Mahsulotlar:{" "}
                <span className="text-[18px] font-bold mb-[10px]">6 ta</span>
              </p>
              <p className="#240E00CC text-[16px]">
                Jami summa:{" "}
                <span className="text-[28px] font-bold">56 778 678 so‘m</span>
              </p>
              <Link href={"/clearance"}>
                <button
                  disabled
                  className="w-[100%] bg-[#D55200] text-white rounded-md font-medium h-[54px] mt-[24px]"
                >
                  Xaridni rasmiylashtirish
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-[60px]">
        <Container>
          <h1 className="font-bold text-[32px] mb-[24px] max-sm:text-[20px]">
            Aksiyadagi mahsulotlar
          </h1>
          <Swiper />
        </Container>
      </div>
    </div>
  );
}

export default Page;

function getProducts() {
  // Implementation for fetching products
}
