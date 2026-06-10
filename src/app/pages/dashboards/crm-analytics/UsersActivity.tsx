// Import Dependencies
import {
  FaUserEdit,
  FaLeaf,
  FaProjectDiagram,
  FaHistory,
} from "react-icons/fa";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

// Local Imports
import {
  Avatar,
  Timeline,
  Tag,
  Button,
  TimelineItem,
  Card,
} from "@/components/ui";

// ----------------------------------------------------------------------

export function UsersActivity() {
  return (
    <Card className="px-4 pb-5 sm:px-5">
      <div className="flex h-14 min-w-0 items-center justify-between py-3">
        <h2 className=" truncate font-medium tracking-wide text-gray-800">
          Users Activity
        </h2>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70   border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          View All
        </a>
      </div>
      <div className="max-w-lg">
        <Timeline pointSize="1.5rem">
          <TimelineItem
            title="User Photo Changed"
            time={new Date().setMinutes(new Date().getMinutes() - 12)}
            point={
              <div className="timeline-item-point relative flex shrink-0 items-center justify-center rounded-full border border-this-secondary text-this-secondary">
                <FaUserEdit className="text-xs" />
              </div>
            }
          >
            <p> John Doe changed his avatar photo</p>
            <Avatar
              size={12}
              src="/images/avatar/avatar-19.jpg"
              classNames={{
                root: "mt-2",
                display: "mask is-squircle rounded-none",
              }}
            />
          </TimelineItem>
          <TimelineItem
            title="Design Completed"
            time={new Date().setHours(new Date().getHours() - 3)}
            point={
              <div className="timeline-item-point relative flex shrink-0 items-center justify-center rounded-full border border-this-success text-this-success">
                <FaLeaf className="text-xs" />
              </div>
            }
          >
            <p>Robert Nolan completed the design of the CRM application</p>
            <a
              href="##"
              className="text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70   mt-3 inline-flex space-x-1 font-medium outline-hidden transition-colors duration-300"
            >
              <DocumentArrowDownIcon className="size-5" />
              <span> Design-final.fig</span>
            </a>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Tag
                href="#"
                variant="soft"
                color="secondary"
                className="border-this-darker/40 rounded-full border"
              >
                UI/UX
              </Tag>
              <Tag
                href="#"
                variant="soft"
                color="info"
                className="border-this-darker/40 rounded-full border"
              >
                CRM
              </Tag>
              <Tag
                href="#"
                variant="soft"
                color="success"
                className="border-this-darker/40 rounded-full border"
              >
                Dashboard
              </Tag>
            </div>
          </TimelineItem>
          <TimelineItem
            title="ER Diagram"
            time={new Date().setDate(new Date().getDate() - 1)}
            point={
              <div className="timeline-item-point this:secondary text-this relative flex shrink-0 items-center justify-center rounded-full border border-current">
                <FaProjectDiagram className="text-xs" />
              </div>
            }
          >
            <p>Team completed the ER diagram app</p>
            <div className="mt-1">
              <p className=" text-xs text-gray-400">
                Members:
              </p>
              <div className="mt-2 flex justify-between">
                <div className="flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display: " ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-16.jpg"
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display: " text-xs ring-3 ring-white",
                    }}
                    name="John Doe"
                    initialColor="info"
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display: " ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-10.jpg"
                  />

                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display: " ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-8.jpg"
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display: " text-xs ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-5.jpg"
                  />
                </div>
                <Button className="size-7 rounded-full" isIcon>
                  <ArrowUpRightIcon className="size-4.5" />
                </Button>
              </div>
            </div>
          </TimelineItem>
          <TimelineItem
            title="Weekly Report"
            time={new Date().setDate(new Date().getDate() - 2)}
            point={
              <div className="timeline-item-point this:error text-this relative flex shrink-0 items-center justify-center rounded-full border border-current">
                <FaHistory className="text-xs" />
              </div>
            }
          >
            <p className="mt-1">The weekly report was uploaded</p>
          </TimelineItem>
        </Timeline>
      </div>
    </Card>
  );
}
