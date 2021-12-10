import Expandable from "components/shared/Expandable";
import React from "react";
import Sidebar from ".";

const widgetData = [
  {
    id: 1,
    title: "Widget 1",
    child: [
      {
        id: 1,
        title: "Children 1",
        child: [
          {
            id: 1,
            title: "Child 1",
            child: [],
          },
        ],
      },
      {
        id: 2,
        title: "Children 1",
        child: [
          {
            id: 1,
            title: "Child 1",
            child: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "asdasd 1",
    child: [
      {
        id: 1,
        title: "sgvsfsdf 1",
        child: [
          {
            id: 1,
            title: "sgsrser 1",
            child: [],
          },
        ],
      },
      {
        id: 2,
        title: "wrwrsdf 1",
        child: [
          {
            id: 1,
            title: "aerarar 1",
            child: [
              {
                id: 1,
                title: "aerarar 1",
                child: [],
              },
              {
                id: 2,
                title: "aerarar 1",
                child: [],
              },
              {
                id: 3,
                title: "aerarar 1",
                child: [
                  {
                    id: 1,
                    title: "aerarar 1",
                    child: [],
                  },
                  {
                    id: 2,
                    title: "aerarar 1",
                    child: [],
                  },
                  {
                    id: 3,
                    title: "aerarar 1",
                    child: [],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            title: "aerarar 1",
            child: [],
          },
          {
            id: 3,
            title: "aerarar 1",
            child: [],
          },
        ],
      },
      {
        id: 3,
        title: "wrwrsdf 1",
        child: [
          {
            id: 1,
            title: "aerarar 1",
            child: [
              {
                id: 1,
                title: "aerarar 1",
                child: [],
              },
              {
                id: 2,
                title: "aerarar 1",
                child: [],
              },
              {
                id: 3,
                title: "aerarar 1",
                child: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "asdasd 1",
    child: [
      {
        id: 1,
        title: "sgvsfsdf 1",
        child: [
          {
            id: 1,
            title: "sgsrser 1",
            child: [],
          },
        ],
      },
      {
        id: 2,
        title: "wrwrsdf 1",
        child: [
          {
            id: 1,
            title: "aerarar 1",
            child: [],
          },
          {
            id: 2,
            title: "aerarar 1",
            child: [],
          },
          {
            id: 3,
            title: "aerarar 1",
            child: [],
          },
        ],
      },
      {
        id: 3,
        title: "wrwrsdf 1",
        child: [
          {
            id: 1,
            title: "aerarar 1",
            child: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "asdasd 1",
    child: [
      {
        id: 1,
        title: "sgvsfsdf 1",
        child: [
          {
            id: 1,
            title: "sgsrser 1",
            child: [],
          },
        ],
      },
      {
        id: 2,
        title: "wrwrsdf 1",
        child: [
          {
            id: 1,
            title: "aerarar 1",
            child: [],
          },
          {
            id: 2,
            title: "aerarar 1",
            child: [],
          },
          {
            id: 3,
            title: "aerarar 1",
            child: [],
          },
        ],
      },
      {
        id: 3,
        title: "wrwrsdf 1",
        child: [
          {
            id: 1,
            title: "aerarar 1",
            child: [],
          },
        ],
      },
    ],
  },
];

function ComponentSidebar() {
  return (
    <Sidebar header="Widget List">
      {widgetData?.map((widget) => (
        <Expandable key={widget?.id} title={widget?.title} data={widget} />
      ))}
    </Sidebar>
  );
}

export default ComponentSidebar;
