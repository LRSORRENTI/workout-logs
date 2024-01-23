import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import '../app/tableStyles.css'
  export default function ChestTriShoulders() {
    return (
      <>
      <div className="wrap-p">
      <p className="main-p-chest text-center text-1xl sm:text-2xl md:text-4xl mb-3">Legs / Abs</p>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center max-w-4xl">
          <div className="flex justify-center flex-col sm:flex-row sm:flex-wrap">
          <div className="table-wrap">
          <p className="flex justify-center text-1xl font-extrabold mb-2 lift-title" >Leg Raises</p>
  <Table className="w-60 bg-slate-800 rounded-xl mx-4 table-wrap table-color">
  <div className="table-head-wrap">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[80px] text-white font-extrabold ">Set</TableHead>
      <TableHead className="text-white font-extrabold ">Reps</TableHead>
      <TableHead className="text-white font-extrabold">Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>30</TableCell>
      <TableCell>2.5lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >25</TableCell>
      <TableCell>2.5lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>15</TableCell>
      <TableCell>5lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>15</TableCell>
      <TableCell>5lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>12</TableCell>
      <TableCell>7.5lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>12</TableCell>
      <TableCell>7.5lbs</TableCell>
    </TableRow>
  </TableBody>
  </div>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2 lift-title" >Sit Ups</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
<div className="table-head-wrap">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[80px] text-white font-extrabold ">Set</TableHead>
      <TableHead className="text-white font-extrabold ">Reps</TableHead>
      <TableHead className="text-white font-extrabold ">Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>40</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >40</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>40</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>40</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>40</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>40</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
  </TableBody>
  </div>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2 lift-title" >Barbell Squats</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
<div className="table-head-wrap">
  
  <TableHeader>
<TableRow>
      <TableHead className="w-[80px] text-white font-extrabold ">Set</TableHead>
      <TableHead className="text-white font-extrabold ">Reps</TableHead>
      <TableHead className="text-white font-extrabold ">Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>20</TableCell>
      <TableCell>135lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >16</TableCell>
      <TableCell>140lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>14</TableCell>
      <TableCell>145lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>12</TableCell>
      <TableCell>150lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>10</TableCell>
      <TableCell>155lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>9</TableCell>
      <TableCell>160lbs</TableCell>
    </TableRow>
  </TableBody>
  </div>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2 lift-title" >Calf Raises</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
<div className="table-head-wrap">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[80px] text-white font-extrabold ">Set</TableHead>
      <TableHead className="text-white font-extrabold ">Reps</TableHead>
      <TableHead className="text-white font-extrabold ">Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>25</TableCell>
      <TableCell>25lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >20</TableCell>
      <TableCell>25lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>18</TableCell>
      <TableCell>35lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>16</TableCell>
      <TableCell>35lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>14</TableCell>
      <TableCell>45lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>12</TableCell>
      <TableCell>45lbs</TableCell>
    </TableRow>
  </TableBody>
  </div>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2 lift-title">Bodyweight Planks</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
<div className="table-head-wrap">
<TableHeader>
    <TableRow className="table-row-1">
      <TableHead className="w-[80px] text-white font-extrabold ">Set</TableHead>
      <TableHead className=" text-white font-extrabold ">Reps</TableHead>
      <TableHead className=" text-white font-extrabold ">Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>60s</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >60s</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>60s</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>60s</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>60s</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>60s</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
  </TableBody>
  </div>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2 lift-title">Oblique Crunches</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color" >
  <div className="table-head-wrap">
  <TableHeader>
    <TableRow className="table-row-1">
      <TableHead className="w-[80px] text-white font-extrabold ">Set</TableHead>
      <TableHead className=" text-white font-extrabold ">Reps</TableHead>
      <TableHead className=" text-white font-extrabold ">Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>18</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >16</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>14</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>15</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>20</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>18</TableCell>
      <TableCell>Bodyweight</TableCell>
    </TableRow>
  </TableBody>
  </div>
</Table>
</div>
</div>
</div>
</div>
</>
    );
  };