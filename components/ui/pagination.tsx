import * as React from 'react'
import { cn } from '@/lib/utils'

/* ---------------------------------- */
/* Pagination Root                    */
/* ---------------------------------- */
function Pagination({
  className,
  ...props
}: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('flex justify-center', className)}
      {...props}
    />
  )
}

/* ---------------------------------- */
/* Pagination Content                 */
/* ---------------------------------- */
function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  )
}

/* ---------------------------------- */
/* Pagination Item                    */
/* ---------------------------------- */
function PaginationItem(props: React.ComponentProps<'li'>) {
  return <li {...props} />
}

/* ---------------------------------- */
/* Pagination Link                    */
/* ---------------------------------- */
type PaginationLinkProps = {
  isActive?: boolean
} & React.ComponentProps<'a'>

function PaginationLink({
  className,
  isActive,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'flex h-7 min-w-7 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors',
        isActive
          ? 'bg-red-600 text-white border-red-600 pointer-events-none'
          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100',
        className
      )}
      {...props}
    />
  )
}

/* ---------------------------------- */
/* Prev / Next                        */
/* ---------------------------------- */
function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn('px-4', className)}
      {...props}
    >
      ‹ Prev
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn('px-4', className)}
      {...props}
    >
      Next ›
    </PaginationLink>
  )
}

/* ---------------------------------- */
/* Exports                            */
/* ---------------------------------- */
export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
}
