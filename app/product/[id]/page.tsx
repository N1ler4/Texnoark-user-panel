"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container/page";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style.css";
import { Button, Carousel } from "antd";
import Image from "next/image";
import Car from "@/images/car.svg";
import Shop from "@/images/shop.svg";
import Time from "@/images/time.svg";
import useProductStore from "@/store/products/page";
import Banner3 from "@/images/banner3.png";
import Swiper from "@/components/swiper/page";
import { useParams } from "next/navigation";
import * as Yup from "yup";
import TextArea from "antd/es/input/TextArea";
import { SendOutlined } from "@ant-design/icons";
import useCommentStore from "@/store/comments";
import "./style.css";
import { Formik, Form, Field } from "formik";
import useCartStore from "@/store/cart";

function Product() {
  const [product, setData] = useState<any>({});
  const [comments, setComments] = useState("Telfon xususiyatlari");
  const [comment, setComment] = useState<any>([]);

  const { id } = useParams();
  const { getSingleProduct } = useProductStore();
  const { getComments, postComment } = useCommentStore();
  const { postCart } = useCartStore();

  const getData = async () => {
    const res = await getSingleProduct(id);
    if (res && res.status === 200) {
      setData(res.data.data.product);
    }
  };
  const getCommentsData = async () => {
    const response = await getComments(id);
    if (response && response.status === 200) {
      setComment(response.data.data.comment);
    }
  };


  const postCartData = {
    product_id: Number(id),
  };

  useEffect(() => {
    getData();
    getCommentsData();
  }, [id]);

  const images = product.images
    ? product.images.map((image: string) => ({
        original: image,
        thumbnail: image,
      }))
    : [];

  const validationSchema = Yup.object().shape({
    comment: Yup.string().required(),
  });
  const handleSubmit = async (values: any) => {
    const res = await postComment(values);
    if (res && res.status === 201) {
      getCommentsData();
    }
  };

  return (
    <>
      <div>
        <Container>
          <p className="flex gap-[10px] mt-[20px]">
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Bosh sahifa
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Smartfonlar
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              {product.name}
            </span>
          </p>
        </Container>
      </div>
      <div className="mt-[24px]">
        <Container>
          <div className="flex justify-between flex-wrap gap-10">
            <div className="max-w-[700px] lg:max-w-[55%] bg-white rounded-md w-full h-[560px]">
              <ImageGallery
                items={images}
                infinite={true}
                thumbnailPosition="left"
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                showNav={false}
              />
            </div>
            <div className="w-full max-w-[600px] lg:max-w-[40%] bg-white h-[auto] p-[40px] rounded-md">
              <h3 className="text-[24px] font-bold mb-[26px]">
                {product.name}
              </h3>
              <div className="flex items-center gap-[12px]">
                <p className="text-[16px] text-[#240E00CC] font-medium mr-3">
                  Rang:
                </p>
                <div className="w-[24px] h-[24px] bg-[#9747FF] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#3472ED] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#D55200] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#DADADA] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#FEDACB] rounded-full cursor-pointer"></div>
              </div>
              <p className="text-[16px] text-[#240E00CC] font-medium mr-3 mt-[42px] mb-[36px]">
                Narx:{" "}
                <span className="text-[28px] font-bold text-[#240E00CC]">
                  {product.price} so‘m
                </span>
              </p>
              <p className="mb-[8px] py-[16px] px-[32px] text-[16px] font-medium text-[#240E00CC] bg-[#F0F0F0] rounded-md">
                Oyiga {Math.ceil(product.price / 12)} so‘mdan 12/oyga muddatli
                to ‘lov
              </p>
              <div className="flex justify-between mb-[40px] gap-5">
                <Button
                  className="single_btn"
                  onClick={() => postCart(postCartData)}
                >
                  Savatga qo ‘shish
                </Button>
                <Button
                  className="single_btn2"
                  onClick={() => {
                    postCart(postCartData)
                  }}
                >
                  Xarid qilish
                </Button>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[16px]">
                  <Image src={Car} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Yetkazib berish O’zbekiston bo’ylab
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Image src={Shop} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Do’kondi o’zidan olib ketishingiz mumkin
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Image src={Time} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Tahminiy yetkazib berish 1 kundan 3 kungacha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex gap-[30px] mt-[40px]">
            <button
              onClick={() => setComments("Telfon xususiyatlari")}
              className={`${
                comments == "Telfon xususiyatlari"
                  ? "bg-[#FF6F14] text-white duration-300"
                  : "bg-white text-[black] duration-300"
              } py-0 px-0 lg:py-[14px] lg:px-[32px] rounded-[10px font-semibold rounded-[10px]`}
            >
              Telfon xususiyatlari
            </button>
            <button
              onClick={() => setComments("Mijozlarni fikri")}
              className={`${
                comments == "Mijozlarni fikri"
                  ? "bg-[#FF6F14] text-white duration-300"
                  : "bg-white text-[black] duration-300"
              } py-[14px] px-[32px] rounded-[10px font-semibold rounded-[10px]`}
            >
              Mijozlarni fikri
            </button>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex justify-between w-full flex-wrap">
            <div className="w-[820px] max-h-[560px] h-full">
              {comments == "Telfon xususiyatlari" && (
                <div className="py-[60px] px-[80px]">
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Brend
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      Vivo
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      CIM kartalar soni
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      2
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      O’lchamlari
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      75,09х155,11х8,28
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Modeli
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      Redmi T12
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Akumulyator hajmi
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      4000 amp
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Yadrolar soni
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      8
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Tezkor xotira RAM
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      6 GB
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Ichki xotira ROM
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      128 GB
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Protsessori
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      MediaTek Helio P35 (MT6765)
                    </p>
                  </div>
                </div>
              )}
              {comments == "Mijozlarni fikri" && (
                <div className="bg-white p-5 h-full mt-[60px] overflow-y-scroll max-h-[510px] ">
                  <Formik
                    initialValues={{ comment: "", product_id: Number(id) }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form className="flex gap-3 items-center">
                        <Field
                          name="comment"
                          as={TextArea}
                          placeholder="Add your comments"
                        />
                        <Button
                          htmlType="submit"
                          icon={<SendOutlined />}
                          className="custom-send-btn"
                        />
                      </Form>
                    )}
                  </Formik>
                  <div className="flex flex-col gap-[30px] mt-[20px] ">
                    {comment.length ? (
                      comment.map((e: any, i: any) => (
                        <div
                          className="flex gap-[24px] border-2 border-gray-500 p-4 items-center"
                          key={i}
                        >
                          <div className="w-[56px] h-[56px] rounded-full bg-[#FF6F14] grid justify-center items-center text-[32px] text-white">
                            {e.user_id.first_name.slice(0, 1)}
                          </div>
                          <div>
                            <div className="flex gap-[20px] items-center">
                              <h4 className="text-[#240E00CC] text-[24px] font-medium">
                                {e.user_id.first_name} {e.user_id.last_name}
                              </h4>
                              <p className="text-[#240E00CC] text-[16px] font-medium">
                                {e.createdAt.slice(0, 10)}
                              </p>
                            </div>
                            <p className="text-[#240E00CC] text-[18px]">
                              {e.comment}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>Have not any comments</>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="max-w-[490px] w-full h-full max-h-[560px] mt-[60px]">
              <Carousel
                autoplay
                dots={{ className: "custom-dots" }}
                className="product-carousel"
              >
                <div>
                  <Image
                    src={Banner3}
                    alt="carousel image"
                    className="rounded-[10px]"
                  />
                </div>
                <div>
                  <Image
                    src={Banner3}
                    alt="carousel image"
                    className="rounded-[10px]"
                  />
                </div>
                <div>
                  <Image
                    src={Banner3}
                    alt="carousel image"
                    className="rounded-[10px]"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </Container>
      </div>
      <div className="mt-[64px]">
        <Container>
          <h3 className="text-[28px] font-bold text-[#240E00CC] mb-[34px]">
            Oxshash mahsulotlar
          </h3>
          <div className="relative">
            <Swiper />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Product;
