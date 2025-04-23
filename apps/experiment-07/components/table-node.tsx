import { memo } from "react"
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react"
import { MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"

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

function TableNode({ data, selected }: NodeProps<TableNodeType>) {
  return (
    <div
      className={cn(
        "rounded-lg bg-white shadow-md border border-gray-200 w-64 overflow-hidden",
        selected ? "ring-2 ring-primary ring-offset-2" : ""
      )}
    >
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="font-mono text-sm text-gray-600">/ {data.label}</div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      <div className="divide-y divide-gray-100">
        {data.fields.map((field: TableField) => (
          <div key={field.name} className="flex items-center justify-between py-2 px-3 relative">
            <span className="text-sm">{field.name}</span>
            <span className="text-xs text-gray-400 font-mono">{field.type}</span>

            {/* Primary key handle (source) */}
            {field.isPrimary && (
              <Handle
                type="source"
                position={Position.Right}
                id={field.name}
                className="w-3 h-3 rounded-full bg-gray-900 border-2 border-white"
                style={{ right: -6, top: "50%" }}
              />
            )}

            {/* Foreign key handle (target) */}
            {field.isForeign && (
              <Handle
                type="target"
                position={Position.Left}
                id={field.name}
                className="w-3 h-3 rounded-full bg-gray-900 border-2 border-white"
                style={{ left: -6, top: "50%" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(TableNode)
