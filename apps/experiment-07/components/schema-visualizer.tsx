"use client"

import { useCallback, useRef } from "react"
import {
  ReactFlow,
  ReactFlowProvider,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Panel,
  useReactFlow,
  BackgroundVariant,
} from "@xyflow/react"
import '@xyflow/react/dist/base.css';
import { Plus, Minus, Maximize2, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import TableNode from "@/components/table-node"
import SchemaEdge from "@/components/schema-edge"
import { initialNodes, initialEdges } from "@/lib/schema-data"

// Register custom node types and edge types
const nodeTypes = {
  tableNode: TableNode,
}

const edgeTypes = {
  custom: SchemaEdge,
}

function SchemaVisualizerInner() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const { fitView, zoomIn, zoomOut } = useReactFlow()

  const onFitView = useCallback(() => {
    fitView({ padding: 0.2 })
  }, [fitView])

  return (
    <main className="flex-1 flex items-stretch">
    <div className="w-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        defaultEdgeOptions={{
          type: "custom",
          className: "*:stroke-foreground/20! *:stroke-[1.5px]!",
        }}
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        <Controls showInteractive={false} />
        <Panel position="bottom-right" className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md"
            onClick={() => zoomIn()}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md"
            onClick={() => zoomOut()}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md"
            onClick={onFitView}
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md"
          >
            <Check className="h-4 w-4" />
          </Button>
        </Panel>
      </ReactFlow>
    </div>
    </main>
  )
}

export default function SchemaVisualizer() {
  return (
    <ReactFlowProvider>
      <SchemaVisualizerInner />
    </ReactFlowProvider>
  )
}
