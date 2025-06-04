/* eslint-disable @typescript-eslint/no-explicit-any */
// -- == //
import { FC } from "react";
import clsx from "clsx";
import AppPagination from "@/components/pagination";

interface IProps {
  tdFields: any;
  headers?: IPropsHeader[];
  data?: any[];
  style?: object;
  totlaItems?: number;
  pagination?: {
    page: number;
    size: number;
    total: number;
  };
  headerClassName?: string;
  headerColor?: string;
  loading?: boolean;
  className?: string;
  tableClassName?: string;
  onChangePage?: (pagae: number) => void;
  onChangeSize?: (size: number) => void;
  tdClassName?: string;
  theme?: "one" | "two";
}

interface IPropsHeader {
  rowKey?: string;
  id: string | number;
  title: string;
  icon?: string;
  dir?: "left" | "right";
  width?: string | number;
  tdClassName?: string;
}

const MainTable: FC<IProps> = ({
  tdFields,
  data,
  headers,
  pagination,
  headerClassName,
  headerColor = "#3B3B3B",
  // loading,
  className,
  tableClassName,
  tdClassName,
  theme = "one",
  onChangePage,
  onChangeSize,
}) => {
  const handleChnagePage = (newPage: number) => {
    if (onChangePage) onChangePage(newPage);
  };

  const handleChnageSize = (newPage: number) => {
    if (onChangeSize) onChangeSize(newPage);
  };
  return (
    <>
      <div className={className}>
        <table className={`w-full ${tableClassName}`}>
          {headers ? (
            <thead className={`h-10`} style={{ borderBottom: "1px solid #EEE" }}>
              <tr>
                {headers?.map((item: IPropsHeader, index) => (
                  <th key={index} style={{ width: item.width }}>
                    <div
                      className={clsx("flex items-center text-semiBlack font-semibold p-2", headerClassName)}
                      key={item.id}
                      style={{
                        color: headerColor,
                        justifyContent: item.dir || "center",
                      }}
                    >
                      {/* {item.icon ? (
                        <ReactSVG
                          src={item.icon}
                          beforeInjection={(svg) => {
                            svg.setAttribute('stroke', `${headerColor}`);
                          }}
                        />
                      ) : (
                        <></>
                      )} */}
                      {item.title}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
          ) : (
            <></>
          )}

          <tbody>
            {data?.map((item: any, index) => (
              <tr
                key={index}
                className={clsx(
                  "relative",
                  theme === "two"
                    ? "after:content after:absolute after:top-0 after:bottom-0 after:m-auto after:right-0 after:w-full after:h-[90%] after:bg-white z-0 after:rounded-lg py-1"
                    : ""
                )}
              >
                {Object.entries(tdFields)?.map((field: any, index2) => {
                  return (
                    <td
                      key={`td-${index2}`}
                      className={clsx(
                        "py-1 px-2 relative z-10 text-sm font-medium",
                        theme === "two" ? "last:w-0" : "",
                        tdClassName,
                        headers?.find((h) => h.rowKey === field[0])?.tdClassName
                      )}
                    >
                      {field[1](item)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination ? (
        <div>
          <AppPagination page={1} count={10} onChange={handleChnagePage} onChangeSize={handleChnageSize} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainTable;
