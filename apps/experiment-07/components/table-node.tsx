import { memo } from "react"
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react"
import { MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"
import { initialEdges } from "@/lib/schema-data"

export interface TableField {
  name: string
  type: string
  isPrimary?: boolean
  isForeign?: boolean
}

interface TableNodeData extends Record<string, unknown> {
  label: string
  fields: TableField[]
  selected?: boolean
}

type TableNodeType = Node<TableNodeData, "tableNode">

function TableNode({ data, id }: NodeProps<TableNodeType>) {
  // Find all source connections for this node
  const sourceConnections = initialEdges.filter(edge => edge.source === id).map(edge => edge.sourceHandle)
  
  // Find all target connections for this node
  const targetConnections = initialEdges.filter(edge => edge.target === id).map(edge => edge.targetHandle)

  return (
    <div
      className={cn(
        "rounded-lg bg-card shadow-md border w-64",
        data.selected ? "ring-2 ring-primary ring-offset-2" : ""
      )}
    >
      <div className="flex items-center justify-between p-3 border-b">
        <div className="font-mono text-sm text-gray-600">/ {data.label}</div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="size-5" />
        </button>
      </div>
      <div className="divide-y">
        {data.fields.map((field: TableField) => (
          <div key={field.name} className="flex items-center justify-between py-2 px-3 relative">
            <span className="text-sm">{field.name}</span>
            <span className="text-xs text-muted-foreground">{field.type}</span>

            {/* Field handles */}
            {((field.isPrimary && sourceConnections.includes(field.name)) ||
              (field.isForeign && targetConnections.includes(field.name))) && (
              <Handle
                type={field.isPrimary ? "source" : "target"}
                position={field.isPrimary ? Position.Left : Position.Right}
                id={field.name}
                className="size-2.5 rounded-full bg-foreground! border-2 border-background"
                isConnectable={false}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(TableNode)
