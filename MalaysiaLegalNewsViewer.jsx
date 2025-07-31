
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const data = [
  {
    title: "中资企业在马来西亚设厂需注意环保审批流程",
    summary: "根据2024年新出台的环保法，中资企业设厂前需提交EIA报告，并在60日内获批。",
    source: "The Star",
    link: "https://www.thestar.com.my/news/nation/2025/07/30/china-factory-eia",
    date: "2025-07-30",
    tags: ["环保", "设厂", "中国企业", "马来西亚"]
  },
  {
    title: "马来西亚修订外资持股比例政策，放宽制造业限制",
    summary: "新政策将制造业外资股权比例上限由70%提升至100%，鼓励中资企业加大投资。",
    source: "New Straits Times",
    link: "https://www.nst.com.my/business/2025/07/30/fdi-equity-policy",
    date: "2025-07-30",
    tags: ["外资政策", "制造业", "中国投资"]
  }
];

export default function MalaysiaLegalNewsViewer() {
  const [keyword, setKeyword] = useState("");

  const filtered = data.filter(
    (item) =>
      item.title.includes(keyword) ||
      item.summary.includes(keyword) ||
      item.tags.some((tag) => tag.includes(keyword))
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">马来西亚法律与新闻查询工具</h1>
      <Input
        placeholder="输入关键词（如：设厂、环保、税收）"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="mb-4"
      />
      <div className="space-y-4">
        {filtered.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-1">{item.summary}</p>
              <p className="text-sm text-gray-500 mb-1">
                来源：{item.source} ｜ 日期：{item.date}
              </p>
              <a
                href={item.link}
                target="_blank"
                className="text-blue-600 hover:underline text-sm"
              >
                查看原文
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
