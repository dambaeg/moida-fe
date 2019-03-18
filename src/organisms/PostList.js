import React from "react";
import { List, Avatar, Icon, Tag } from "antd";

export default function PostList() {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: console.log,
        pageSize: 5
      }}
      dataSource={listData}
      footer={
        <footer>
          <b>footer</b>
        </footer>
      }
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="star-o" text="156" />,
            <IconText type="like-o" text="156" />,
            <IconText type="message" text="2" />
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={
              <>
                <Tag color="#f50">프론트</Tag>
                <Tag color="#2db7f5">데이터분석머신러닝</Tag>
                <Tag color="#87d068">데이터엔지니어링</Tag>
                <Tag color="#108ee9">백엔드안드로이드</Tag>
              </>
            }
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}

const listData = [...Array(23).keys()].map(i => ({
  href: "http://ant.design",
  title: `ant design part ${i}`,
  avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
}));

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
