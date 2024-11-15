'use client'

import { useEffect, useState } from 'react'
import { IconMap, IResource, IResourceTree, resources, ResourceType } from './data'
import { ChevronRight, Folder, Menu, X } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ResourcesExplorer() {
  const params = useParams()
  const path = params?.path || [] // Default to empty array if path is undefined

  // Ensure 'root' is always prepended to the path
  const fullPath = [...Array.from(path)]
  const [currentPath, setCurrentPath] = useState<string[]>(fullPath)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const getCurrentItems = (): (IResourceTree | IResource)[] => {
    let current: IResourceTree | IResource = resources
    for (let i = 1; i < currentPath.length; i++) {
      if ('children' in current) {
        const found: any = current.children.find(item => item.meta.slug === currentPath[i])
        if (found) {
          current = found
        } else {
          return []
        }
      } else {
        return []
      }
    }
    return 'children' in current ? current.children : []
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const currentItems = getCurrentItems()

  return (
    <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] bg-black font-mono">
      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-4 border-b border-gray-800">
          <button onClick={() => setIsSidebarOpen(false)} className="text-green-500 hover:text-green-400">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-green-500 text-lg font-bold mb-4">Navigation</h2>
          {currentPath.map((path, index) => (
            <button
              key={path}
              onClick={() => {
                setCurrentPath(currentPath.slice(0, index + 1))
                setIsSidebarOpen(false)
              }}
              className="block text-green-500 hover:text-green-400 mb-2"
            >
              {path}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-8">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-800 flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-green-500 hover:text-green-400 md:hidden"
              aria-label="Open navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-green-500 flex-grow truncate flex">
              {currentPath.map((segment, index) => (
                <Link key={segment} href={`/resources/${currentPath.slice(0, index + 1).join('/')}`} className="hover:text-green-400 flex items-center">
                  {segment}
                  {index < currentPath.length - 1 && <ChevronRight />}
                </Link>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            {currentItems.length > 0 ? (
              <table className="w-full text-green-500 text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left hidden sm:table-cell">Type</th>
                    <th className="py-2 px-4 text-left hidden md:table-cell">Added On</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => {
                    const isFolder = 'children' in item
                    const Icon = isFolder ? Folder : (IconMap[item.type as ResourceType] || File)
                    const itemPath = [...currentPath, item.meta.slug].join('/')

                    return (
                      <tr
                        key={item.meta.slug}
                        className={`${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'} hover:bg-gray-700 transition-colors`}
                      >
                        <td className="py-2 px-4 flex items-center">
                          <Icon className="w-5 h-5 mr-2 flex-shrink-0" />
                          {isFolder ? (
                            <Link href={`/resources/${itemPath}`} className="text-green-500 hover:underline">
                              <span className="truncate" title={item.meta.description} aria-label={`${item.meta.title}. ${item.meta.description}`}>
                                {item.meta.title}
                              </span>
                            </Link>
                          ) : (
                            <span className="truncate cursor-help" title={item.meta.description}>
                              {item.meta.title}
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-4 hidden sm:table-cell">{isFolder ? 'Folder' : (item as IResource).type}</td>
                        <td className="py-2 px-4 hidden md:table-cell">{formatDate(item.meta.addedOn)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : (
              <div className="w-full text-center text-red-500 text-xl h-48 flex items-center justify-center">
                <p>No resources found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
