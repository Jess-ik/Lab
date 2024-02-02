import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get('address');
    const latitude = searchParams.get("lat");
    const longitude = searchParams.get("lon");

    let url = "";
    if (address) {
        url =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            address +
            "&appid=" +
            "12b8b385d18fcc0a6ffad7798998eeec";
    } else {
        url = `https://api.openwathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=12b8b385d18fcc0a6ffad7798998eeec`
    }

    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json({ data });
;}