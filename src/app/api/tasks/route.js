
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json("Creando Tareas");
} 

export function POST(){
    return NextResponse.json("Creando una nueva tarea");
}

export function PUT(){
    return NextResponse.json("Actualizando una tarea existente");
}

export function DELETE(){
    return NextResponse.json("Eliminando una tarea");
}