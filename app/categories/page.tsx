"use client";
import React, { useCallback, useEffect, useState } from "react";
import Container from "../../components/container/page";
import { Button, Drawer, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import FilterDrawer from "@/components/drawer/page";
import Card from "@/components/products/page";
import "./style.css";
import SideBar from "@/components/sidebar";
import useProductStore from "@/store/products/page";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Index() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { getProduct } = useProductStore();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleFilter = useCallback(() => {
    setDrawerOpen((prevState) => !prevState);
  }, []);

  const getData = async () => {
    setLoading(true);
    const res = await getProduct("", 100, 1);
    if (res && res.status === 200) {
      setData(res.data.data.products);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center mt-[20px]">
          <p className="flex gap-[20px]">
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Bosh sahifa
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              Smartfonlar
            </span>
          </p>
          <Button
            type="primary"
            onClick={toggleFilter}
            style={{ background: "#D55200", border: "#D55200", color: "white" }}
            className="block lg:hidden rounded text-white font-medium"
          >
            Filter
          </Button>
        </div>
      </Container>
      <div className="mt-[24px] h-auto">
        <Container>
          <div className="flex gap-[48px] justify-between">
            <SideBar />
            <div className="flex flex-wrap ml-7 sm:ml-2 md:ml-0 gap-[20px] w-[956px] mx-auto items-center">
              {loading ? (
                <div className="w-full text-center">
                  <Spin indicator={antIcon} />
                </div>
              ) : data.length ? (
                data.map((e: any, i: number) => (
                  <Card
                    key={i}
                    img={e.images[0]}
                    name={e.name}
                    cost={e.price}
                    id={e.id}
                  />
                ))
              ) : (
                <div className="text-center">Empty</div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <Drawer
        title=""
        placement="left"
        closable={true}
        onClose={toggleFilter}
        open={drawerOpen}
      >
        <div>
          <FilterDrawer />
        </div>
      </Drawer>
    </div>
  );
}

export default Index;
