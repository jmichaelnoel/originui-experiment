import { memo } from "react";
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { RiMore2Fill } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { initialEdges } from "@/lib/schema-data";

export interface TableField {
  name: string;
  type: string;
  isPrimary?: boolean;
  isForeign?: boolean;
}

interface TableNodeData extends Record<string, unknown> {
  label: string;
  fields: TableField[];
  selected?: boolean;
}

type TableNodeType = Node<TableNodeData, "tableNode">;

function TableNode({ data, id }: NodeProps<TableNodeType>) {
  // Find all source connections for this node
  const sourceConnections = initialEdges
    .filter((edge) => edge.source === id)
    .map((edge) => edge.sourceHandle);

  // Find all target connections for this node
  const targetConnections = initialEdges
    .filter((edge) => edge.target === id)
    .map((edge) => edge.targetHandle);

  return (
    <div
      className={cn(
        "rounded-xl bg-card shadow-lg/2 border border-border/70 w-66 font-mono",
        data.selected ? "ring-2 ring-primary ring-offset-2" : "",
      )}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-t from-background">
        <div className="text-[13px]">
          <span className="text-muted-foreground/80">/</span>{" "}
          <span className="font-medium">{data.label}</span>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="shadow-none hover:bg-transparent -my-2 -me-2 text-muted-foreground/80 hover:text-muted-foreground"
          aria-label="Open edit menu"
        >
          <RiMore2Fill className="size-5" aria-hidden="true" />
        </Button>
      </div>
      <div className="text-xs py-2">
        {data.fields.map((field: TableField) => (
          <div key={field.name} className="px-4 relative group">
            <div className="flex items-center justify-between gap-2 py-2 border-dashed group-not-last:border-b">
              <span className="truncate font-medium">{field.name}</span>
              <span className="text-muted-foreground">{field.type}</span>

              {/* Field handles */}
              {((field.isPrimary && sourceConnections.includes(field.name)) ||
                (field.isForeign &&
                  targetConnections.includes(field.name))) && (
                <Handle
                  type={field.isPrimary ? "source" : "target"}
                  position={field.isPrimary ? Position.Left : Position.Right}
                  id={field.name}
                  className="size-2.5 rounded-full bg-foreground! border-2 border-background"
                  isConnectable={false}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(TableNode);
