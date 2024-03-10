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
    value: "1,500",
  },
  {
    title: "Sales Velocity",
    desc: "(Last 24 Hours):",
    value: "120",
    alt: "NFTs per hour",
  },
  {
    title: "Average Selling Price",
    desc: "This Week:",
    value: "0.5",
  },
];

const CreatorList = [
  {
    img: "",
    name: "Eka Prakasa",
    sales: "13.2K",
  },
  {
    img: "",
    name: "Emil Tirtayasa Sinaga ",
    sales: "13.1K",
  },
  {
    img: "",
    name: "Dodo Opung Utama",
    sales: "12.5K",
  },
  {
    img: "",
    name: "Aks Alana",
    sales: "11.0K",
  },
  {
    img: "",
    name: "Lily Dartema",
    sales: "10.9K",
  },
];

export default function Admin() {
  const [isLoading, setIsLoading] = useState(true);

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
        <div>
          <div className={styles.creator_card_name}>{name}</div>
          <div className={styles.creator_card_sales}>{sales}</div>
        </div>
      </div>
    );
  };

  let list = useAsyncList({
    async load({ signal }) {
      let res = await fetch("https://swapi.py4e.com/api/people/?search", {
        signal,
      });
      let json = await res.json();
      setIsLoading(false);

      return {
        items: json.results,
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
              <TableColumn key="name" allowsSorting>
                Name
              </TableColumn>
              <TableColumn key="height" allowsSorting>
                Height
              </TableColumn>
              <TableColumn key="mass" allowsSorting>
                Mass
              </TableColumn>
              <TableColumn key="birth_year" allowsSorting>
                Birth year
              </TableColumn>
            </TableHeader>
            <TableBody
              items={list.items}
              isLoading={isLoading}
              loadingContent={<Spinner label="Loading..." />}
            >
              {(item: any) => (
                <TableRow key={item.name}>
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
            {CreatorList.map(({ img, sales, name }, index) => (
              <Creator img={img} sales={sales} name={name} key={name + index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
