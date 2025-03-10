import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiCheckLine, RiCloseLine, RiRefreshLine } from "@remixicon/react";

interface Transaction {
  id: string;
  date: string;
  in: {
    symbol: string;
    name: string;
  };
  out: {
    symbol: string;
    name: string;
  };
  fees: string;
  change: {
    received: string;
    spent: string;
  };
  status: "completed" | "failed";
  spent: string;
}

const items: Transaction[] = [
  {
    id: "1",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi"
    },
    out: {
      symbol: "TOK",
      name: "Token"
    },
    fees: "$31.2",
    change: {
      received: "14,972",
      spent: "7,872.1"
    },
    status: "completed",
    spent: "$2,867.14"
  },
  {
    id: "2",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi"
    },
    out: {
      symbol: "TOK",
      name: "Token"
    },
    fees: "$22.3",
    change: {
      received: "19,883",
      spent: "12,327"
    },
    status: "completed",
    spent: "$21,314.24"
  },
  {
    id: "3",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi"
    },
    out: {
      symbol: "TOK",
      name: "Token"
    },
    fees: "$7.4",
    change: {
      received: "12,487",
      spent: "4,494.2"
    },
    status: "completed",
    spent: "$1,429.1"
  },
  {
    id: "4",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi"
    },
    out: {
      symbol: "TOK",
      name: "Token"
    },
    fees: "$42.1",
    change: {
      received: "13,229",
      spent: "7,872.1"
    },
    status: "completed",
    spent: "$3,411.21"
  },
  {
    id: "5",
    date: "17 Feb, 2025",
    in: {
      symbol: "ARK",
      name: "ArkFi"
    },
    out: {
      symbol: "TOK",
      name: "Token"
    },
    fees: "$24.7",
    change: {
      received: "14,457",
      spent: "12,226"
    },
    status: "completed",
    spent: "$12,317.9"
  },
];

export function TransactionsTable() {
  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Date</TableHead>
              <TableHead>Conversion</TableHead>
              <TableHead>Fees</TableHead>
              <TableHead>Change</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead>Spent</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-foreground/70 whitespace-nowrap">{item.date}</TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-medium">
                        {item.in.symbol.charAt(0)}
                      </div>
                      <span>{item.in.symbol}</span>
                    </div>
                    <RiArrowRightLine size={16} className="text-input" aria-hidden="true" />
                    <div className="flex items-center gap-1">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-medium">
                        {item.out.symbol.charAt(0)}
                      </div>
                      <span>{item.out.symbol}</span>
                    </div>                  
                  </div>
                </TableCell>
                <TableCell className="text-foreground/70">{item.fees}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Badge className="text-sm font-normal bg-emerald-500/12 text-emerald-600 border-none py-0.5 px-2">
                      {item.change.received}
                    </Badge>
                    <RiArrowRightLine size={16} className="text-input" aria-hidden="true" />
                    <Badge className="text-sm font-normal bg-red-500/12 text-red-500 border-none py-0.5 px-2">
                    {item.change.spent}
                  </Badge>
                  </div>                    
                </TableCell>
                <TableCell className="text-center">
                  {item.status === "completed" && (
                    <>
                      <span className="sr-only">Completed</span>
                      <RiCheckLine size={16} className="inline-flex text-emerald-500" />
                    </>
                  )}
                  {item.status === "failed" && (
                    <>
                      <span className="sr-only">Failed</span>
                      <RiCloseLine size={16} className="inline-flex text-red-500" />
                    </>
                  )}
                </TableCell>
                <TableCell className="font-medium">{item.spent}</TableCell>
                <TableCell className="py-0 text-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="shadow-none text-muted-foreground/60"
                    aria-label="Edit item"
                  >
                    <RiRefreshLine size={16} aria-hidden="true" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
