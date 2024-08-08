import React, { useState, useEffect } from 'react';
import {
    useReactTable,
    flexRender,
    ColumnDef,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table';

import { Link } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { AiOutlineInbox } from 'react-icons/ai';

interface HasId {
    id: number;
}

interface DataTableProps<TData extends HasId> {
    columns: ColumnDef<TData, any>[];
    data: TData[];
    isPagination?: boolean;
    isSearch?: boolean;
    isActions?: boolean;
    actions?: string[];
    searchTerm: string;
    isCustomSize?: boolean;
}

const DataTable = <TData extends HasId>({
    columns,
    data = [],
    isPagination = false,
    isActions = false,
    actions = ['view', 'update', 'delete'],
    searchTerm,
    isCustomSize = false,

}: DataTableProps<TData>) => {


    const [globalFilter, setGlobalFilter] = useState(searchTerm);
    const [pageSize, setPageSize] = useState(10);
    const [pageIndex, setPageIndex] = useState(0);
    const tableData = data || [];

    const tableInstance = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        globalFilterFn: 'includesString',
        pageCount: Math.ceil(data.length / pageSize),
        state: {
            pagination: { pageIndex, pageSize },
            globalFilter: globalFilter,
        },
        onPaginationChange: (updater) => {
            const newPagination = typeof updater === 'function' ? updater({ pageIndex, pageSize }) : updater;
            setPageIndex(newPagination.pageIndex);
            setPageSize(newPagination.pageSize);
        },
        onGlobalFilterChange: setGlobalFilter,
    });



    useEffect(() => {
        tableInstance.setGlobalFilter(searchTerm);
    }, [searchTerm, tableInstance]);

    return (
        <div className="overflow-x-auto">
            <div
                style={{
                    width: isCustomSize ? tableInstance.getCenterTotalSize() : 'auto',
                }}
                className="rounded-[16px] bg-white border-[1.2px] border-neutral-300"
            >
                {tableData.length > 0 ? (
                    <div>
                        <div className="p-4 py-2 font-medium border-b border-neutral-200">
                            {tableInstance.getHeaderGroups().map((headerGroup) => (
                                <div className="flex" key={headerGroup.id}>
                                    <div className="w-8 py-2">#</div>
                                    {headerGroup.headers
                                        .filter((header) => header.column.columnDef.header !== '#')
                                        .map((header) => (
                                            <div className="flex-1 py-2" key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(header.column.columnDef.header, header.getContext())}
                                            </div>
                                        ))}
                                    {isActions && <div className="flex-1">Actions</div>}
                                </div>
                            ))}
                        </div>
                        <div>
                            {tableInstance.getRowModel().rows.map((row) => (
                                <React.Fragment key={row.id}>
                                    <div className="flex p-4 border-b border-neutral-300">
                                        <div className="w-8">{row.index + 1}</div>
                                        {row
                                            .getVisibleCells()
                                            .filter((cell) => cell.column.columnDef.header !== '#')
                                            .map((cell) => (
                                                <div className="flex-1" key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </div>
                                            ))}
                                        {isActions && (
                                            <div className="flex items-start flex-1 gap-4">
                                                {actions.includes('view') && (
                                                    <Link
                                                        to={`${row.original.id}`}
                                                        className="px-4 py-1 rounded-[4px] text-lg text-white bg-slate-800"
                                                    >
                                                        <BsEye />
                                                    </Link>
                                                )}
                                                {actions.includes('update') && (
                                                    <button
                                                        onClick={() => {
                                                            handleUpdateItem(row.original);
                                                        }}
                                                        className="bg-sky-800 text-white px-4 py-1 rounded-[4px]"
                                                    >
                                                        <BiEdit />
                                                    </button>
                                                )}
                                                {actions.includes('delete') && (
                                                    <button
                                                        onClick={() => {
                                                            handleDeleteItem(row.original.id);
                                                        }}
                                                        className="bg-pink-800 text-white px-4 py-1 rounded-[4px]"
                                                    >
                                                        <MdOutlineDeleteOutline />
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center min-h-[20vh] justify-center">
                        <div className="flex flex-col text-center">
                            <AiOutlineInbox className="text-6xl" />
                            <p className="">No data found</p>
                        </div>
                    </div>
                )}
            </div>
            {isPagination && (
                <div className="flex items-center justify-between">
                    <div className="flex items-center w-1/2 gap-4">
                        <button
                            className="px-4 py-1 text-white bg-slate-800"
                            onClick={tableInstance.previousPage}
                            disabled={!tableInstance.getCanPreviousPage()}
                        >
                            Previous
                        </button>
                        <span className="block">
                            Page {tableInstance.getState().pagination.pageIndex + 1} of {tableInstance.getPageCount()}
                        </span>
                        <button
                            className="px-4 py-1 text-white bg-slate-800"
                            onClick={tableInstance.nextPage}
                            disabled={!tableInstance.getCanNextPage()}
                        >
                            Next
                        </button>
                    </div>
                    <div className="flex items-center my-4">
                        <select
                            className="p-1 rounded-[8px]"
                            value={pageSize}
                            onChange={(e) => setPageSize(Number(e.target.value))}
                        >
                            {[2, 10, 20, 30, 40, 50].map((size) => (
                                <option key={size} value={size}>
                                    {size} / Page
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}



        </div>
    );
};

export default DataTable;
