"use client";

import Image from "next/image";
import styles from "./admin.module.css";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { useState } from "react";
import "../../output.css";
import { getCollections } from "@/app/API/collection";
import { img } from "@/app/assets";

interface CardProps {
  title: string;
  desc: string;
  value: string;
  alt?: string;
}

interface CreatorProps {
  img: string;
  sales: string;
  name: string;
}

const CardList = [
  {
    title: "Volume",
    desc: "Total NFT Volume Today:",
    value: "0",
  },
  {
    title: "Sales Velocity",
    desc: "(Last 24 Hours):",
    value: "0",
    alt: "NFTs per hour",
  },
  {
    title: "Average Selling Price",
    desc: "This Week:",
    value: "0",
  },
];

// const CreatorList = [
//   {
//     img: "",
//     name: "Eka Prakasa",
//     sales: "13.2K",
//   },
//   {
//     img: "",
//     name: "Emil Tirtayasa Sinaga ",
//     sales: "13.1K",
//   },
//   {
//     img: "",
//     name: "Dodo Opung Utama",
//     sales: "12.5K",
//   },
//   {
//     img: "",
//     name: "Aks Alana",
//     sales: "11.0K",
//   },
//   {
//     img: "",
//     name: "Lily Dartema",
//     sales: "10.9K",
//   },
// ];

export default function Admin() {
  const [isLoading, setIsLoading] = useState(true);
  const [CreatorList, setCreatorList] = useState<any>([]);

  const Card = ({ title, desc, value, alt }: CardProps) => {
    return (
      <div className={styles.card}>
        <div className={styles.card_inner_container}>
          <div className={styles.card_title}>{title}</div>
          <div className={styles.card_desc}>{desc}</div>
          <div className={styles.card_value}>
            {value}
            {title === "Average Selling Price" ? (
              <span className={styles.card_eth}>ETH</span>
            ) : undefined}
          </div>
          <div className={styles.card_alt}>{alt}</div>
        </div>
      </div>
    );
  };

  const Creator = ({ img, sales, name }: CreatorProps) => {
    return (
      <div className={styles.creator_card}>
        <Image src={img} alt={name} className={styles.creator_card_img} />
        <div className={styles.creator_card_m}>
          <div className={styles.creator_card_name}>{name}</div>
          <div className={styles.creator_card_sales}>Amount of sales: {sales}</div>
        </div>
      </div>
    );
  };

  let list = useAsyncList({
    async load() {
      let cols: any;
      await getCollections().then((data) => {
        cols = data;
      });
      setIsLoading(false);

      console.log(cols);

      let tempval: any = [];

      const seenCreators = new Set();
      const filteredArray = cols.filter((obj: any) => {
        const isDuplicate = seenCreators.has(obj.creator);
        seenCreators.add(obj.creator);
        return !isDuplicate;
      });

      let tempCreator: any = [];

      for (let index = 0; index < filteredArray.length; index++) {
        tempCreator.push({
          img: img.userImg,
          name: filteredArray[index].creator,
          sales: "0",
        });
      }

      setCreatorList([...tempCreator]);

      for (let index = 0; index < cols.length; index++) {
        tempval.push({
          number: index + 1,
          creator: cols[index].creator,
          projName: cols[index].collectionName,
          noNFT: cols[index].NFTs.length,
        });
      }

      return {
        items: tempval,
      };
    },
    async sort({ items, sortDescriptor }: any) {
      return {
        items: items.sort((a: any[], b: any[]) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <div className={styles.admin}>
      <div className={styles.container}>
        <div className={styles.width}>
          <div className={styles.card_container}>
            {CardList.map(({ title, desc, value, alt }, index) => (
              <Card
                title={title}
                desc={desc}
                value={value}
                alt={alt}
                key={title + index}
              />
            ))}
          </div>
          <hr style={{ marginBottom: "20px" }} />
          <Table
            aria-label="Example table with client side sorting"
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}
            classNames={{
              table: "min-h-[400px]",
            }}
          >
            <TableHeader>
              <TableColumn key="number" allowsSorting>
                Number
              </TableColumn>
              <TableColumn key="creator" allowsSorting>
                Creator
              </TableColumn>
              <TableColumn key="projName" allowsSorting>
                Project Name
              </TableColumn>
              <TableColumn key="noNFT" allowsSorting>
                Number of NFT's
              </TableColumn>
            </TableHeader>
            <TableBody
              items={list.items}
              isLoading={isLoading}
              loadingContent={<Spinner label="Loading..." />}
            >
              {(item: any) => (
                <TableRow key={item.number}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className={styles.creator}>
          <div className={styles.creator_title}>Creators of the week</div>
          <div className={styles.creator_card_container}>
            {CreatorList.map(({ img, sales, name }: any, index:number) => (
              <Creator img={img} sales={sales} name={name} key={name + index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
