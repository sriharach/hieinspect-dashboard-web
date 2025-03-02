'use client';

import Layout from '@/components/modules/layouts/Layout';
import Table from '@/components/nextui/Tables/Table';
import { ColumnsType } from '@/components/nextui/Tables/type';
import { Card, CardBody } from '@heroui/react';
import React from 'react';

const Dashboard = () => {
  const columns: ColumnsType<{ id: string; amount: number; name: string }> = [
    {
      title: 'โครงการ',
      key: 'name',
    },
    {
      title: 'จำนวนโครงการ',
      key: 'amount',
    },
  ];
  const dataSource: { id: string; amount: number; name: string }[] = [
    {
      id: '1',
      amount: 252,
      name: 'แสนสิริ',
    },
  ];
  return (
    <Layout>
      <div className="h-full lg:px-6">
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
          <div className="mt-6 gap-6 flex flex-col w-full">
            {/* Card Section Top */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">3 อันดับรายชื่ออสังหาริมทรัพย์ (Realtys)</h3>
              <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  justify-center w-full">
                <Card className="xl:max-w-sm bg-primary rounded-xl px-3 w-full">
                  <CardBody className="py-5 overflow-hidden">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col">
                        <span className="text-white">Auto Insurance</span>
                        <span className="text-white text-xs">1311 Cars</span>
                      </div>
                    </div>
                    <div className="flex gap-2.5 py-2 items-center">
                      <span className="text-white text-xl font-semibold">$45,910</span>
                      <span className="text-success text-xs">+ 4.5%</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <div>
                          <span className="font-semibold text-success text-xs">{'↓'}</span>
                          <span className="text-xs text-white">100,930</span>
                        </div>
                        <span className="text-white text-xs">USD</span>
                      </div>

                      <div>
                        <div>
                          <span className="font-semibold text-danger text-xs">{'↑'}</span>
                          <span className="text-xs text-white">54,120</span>
                        </div>
                        <span className="text-white text-xs">USD</span>
                      </div>

                      <div>
                        <div>
                          <span className="font-semibold text-danger text-xs">{'⭐'}</span>
                          <span className="text-xs text-white">125</span>
                        </div>
                        <span className="text-white text-xs">VIP</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-primary rounded-xl px-3 w-full">
                  <CardBody className="py-5 overflow-hidden">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col">
                        <span className="text-white">Auto Insurance</span>
                        <span className="text-white text-xs">1311 Cars</span>
                      </div>
                    </div>
                    <div className="flex gap-2.5 py-2 items-center">
                      <span className="text-white text-xl font-semibold">$45,910</span>
                      <span className="text-success text-xs">+ 4.5%</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <div>
                          <span className="font-semibold text-success text-xs">{'↓'}</span>
                          <span className="text-xs text-white">100,930</span>
                        </div>
                        <span className="text-white text-xs">USD</span>
                      </div>

                      <div>
                        <div>
                          <span className="font-semibold text-danger text-xs">{'↑'}</span>
                          <span className="text-xs text-white">54,120</span>
                        </div>
                        <span className="text-white text-xs">USD</span>
                      </div>

                      <div>
                        <div>
                          <span className="font-semibold text-danger text-xs">{'⭐'}</span>
                          <span className="text-xs text-white">125</span>
                        </div>
                        <span className="text-white text-xs">VIP</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="xl:max-w-sm bg-primary rounded-xl px-3 w-full">
                  <CardBody className="py-5 overflow-hidden">
                    <div className="flex gap-2.5">
                      <div className="flex flex-col">
                        <span className="text-white">Auto Insurance</span>
                        <span className="text-white text-xs">1311 Cars</span>
                      </div>
                    </div>
                    <div className="flex gap-2.5 py-2 items-center">
                      <span className="text-white text-xl font-semibold">$45,910</span>
                      <span className="text-success text-xs">+ 4.5%</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <div>
                          <span className="font-semibold text-success text-xs">{'↓'}</span>
                          <span className="text-xs text-white">100,930</span>
                        </div>
                        <span className="text-white text-xs">USD</span>
                      </div>

                      <div>
                        <div>
                          <span className="font-semibold text-danger text-xs">{'↑'}</span>
                          <span className="text-xs text-white">54,120</span>
                        </div>
                        <span className="text-white text-xs">USD</span>
                      </div>

                      <div>
                        <div>
                          <span className="font-semibold text-danger text-xs">{'⭐'}</span>
                          <span className="text-xs text-white">125</span>
                        </div>
                        <span className="text-white text-xs">VIP</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
