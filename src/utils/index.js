/**
Tools list
  - Widgets
      awful.widget.button
      awful.widget.clienticon
      awful.widget.keyboardlayout
      awful.widget.launcher
      awful.widget.layoutbox
      awful.widget.layoutlist
      awful.widget.prompt
      awful.widget.taglist
      awful.widget.tasklist
      awful.widget.watch
      naughty.list.actions
      naughty.list.notifications
      naughty.widget.icon
      naughty.widget.message
      naughty.widget.title
      wibox.widget.calendar
      wibox.widget.checkbox
      wibox.widget.graph
      wibox.widget.imagebox
      wibox.widget.piechart
      wibox.widget.progressbar
      wibox.widget.separator
      wibox.widget.slider
      wibox.widget.systray
      wibox.widget.textbox
      wibox.widget.textclock

  - Containers
      awful.widget.only_on_screen
      naughty.widget.background
      wibox.container.arcchart
      wibox.container.background
      wibox.container.constraint
      wibox.container.margin
      wibox.container.mirror
      wibox.container.place
      wibox.container.radialprogressbar
      wibox.container.rotate
      wibox.container.scroll
      wibox.container.tile

  - Layouts
      wibox.layout.align
      wibox.layout.fixed
      wibox.layout.flex
      wibox.layout.grid
      wibox.layout.manual
      wibox.layout.ratio
      wibox.layout.stack

  - Popups and bars
      awful.hotkeys_popup.widget
      awful.menu
      awful.popup
      awful.titlebar
      awful.tooltip
      awful.wallpaper
      awful.wibar
      awful.widget.calendar_popup
      menubar
      naughty.layout.box
      naughty.layout.legacy
      wibox
*/

export const toolList = {
  components: [
    {
      key: "components.awful.widget",
      title: "Awful Widget",
      child: [
        {
          key: "awful.widget.button",
          title: "Button",
        },
        {
          key: "awful.widget.clienticon",
          title: "Client Icon",
        },
        {
          key: "awful.widget.keyboardlayout",
          title: "Keyboard Layout",
        },
        {
          key: "awful.widget.launcher",
          title: "Launcher",
        },
        {
          key: "awful.widget.layoutbox",
          title: "Layout Box",
        },
        {
          key: "awful.widget.layoutlist",
          title: "Layout List",
        },
        {
          key: "awful.widget.prompt",
          title: "Prompt",
        },
        {
          key: "awful.widget.taglist",
          title: "Tag List",
        },
        {
          key: "awful.widget.tasklist",
          title: "Task List",
        },
        {
          key: "awful.widget.watch",
          title: "Watch",
        },
      ],
    },
    {
      key: "components.naughty",
      title: "Notification",
      child: [
        {
          key: "naughty.list",
          title: "Notification List",
          child: [
            {
              key: "naughty.list.actions",
              title: "Actions",
            },
            {
              key: "naughty.list.notifications",
              title: "Notifications",
            },
          ],
        },
        {
          key: "naughty.widget",
          title: "Notification Widget",
          child: [
            {
              key: "naughty.widget.icon",
              title: "Icon",
            },
            {
              key: "naughty.widget.message",
              title: "Message",
            },
            {
              key: "naughty.widget.title",
              title: "Title",
            },
          ],
        },
      ],
    },

    {
      key: "components.wibox.widget",
      title: "Wibox Widget",
      child: [
        {
          key: "wibox.widget.calendar",
          title: "Calendar",
        },
        {
          key: "wibox.widget.checkbox",
          title: "Checkbox",
        },
        {
          key: "wibox.widget.graph",
          title: "Graph",
        },
        {
          key: "wibox.widget.imagebox",
          title: "Image Box",
        },
        {
          key: "wibox.widget.piechart",
          title: "Pie Chart",
        },
        {
          key: "wibox.widget.progressbar",
          title: "Progressbar",
        },
        {
          key: "wibox.widget.separator",
          title: "Separator",
        },
        {
          key: "wibox.widget.slider",
          title: "Slider",
        },
        {
          key: "wibox.widget.systray",
          title: "Systray",
        },
        {
          key: "wibox.widget.textbox",
          title: "Textbox",
        },
        {
          key: "wibox.widget.textclock",
          title: "Text Clock",
        },
      ],
    },
  ],
  containers: [
    {
      key: "containers.naughty",
      title: "Notification",
      child: [
        {
          key: "naughty.widget.background",
          title: "Background",
        },
      ],
    },
    {
      key: "containers.wibox.container",
      title: "Wibox Container",
      child: [
        {
          key: "wibox.container.arcchart",
          title: "Arc Chart",
        },
        {
          key: "wibox.container.background",
          title: "Background",
        },
        {
          key: "wibox.container.constraint",
          title: "Constraint",
        },
        {
          key: "wibox.container.margin",
          title: "Margin",
        },
        {
          key: "wibox.container.mirror",
          title: "Mirror",
        },
        {
          key: "wibox.container.place",
          title: "Place",
        },
        {
          key: "wibox.container.radialprogressbar",
          title: "Radial Progressbar",
        },
        {
          key: "wibox.container.rotate",
          title: "Rotate",
        },
        {
          key: "wibox.container.scroll",
          title: "Scroll",
        },
        {
          key: "wibox.container.tile",
          title: "Tile",
        },
      ],
    },
  ],
  layouts: [
    {
      key: "wibox.layout.align",
      title: "Align",
    },

    {
      key: "wibox.layout.fixed",
      title: "Fixed",
    },

    {
      key: "wibox.layout.flex",
      title: "Flex",
    },

    {
      key: "wibox.layout.grid",
      title: "Grid",
    },

    {
      key: "wibox.layout.manual",
      title: "Manual",
    },

    {
      key: "wibox.layout.ratio",
      title: "Ratio",
    },

    {
      key: "wibox.layout.stack",
      title: "Stack",
    },
  ],
  popbars: [],
};
export const widgetData = [
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

export const isValidColor = (str) => {
  const three = /^#[a-f0-9]{3}$/i;
  const six = /^#[a-f0-9]{6}$/i;

  return str.match(three) !== null || str.match(six);
};
