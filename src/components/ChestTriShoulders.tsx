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
      <p className="main-p-chest text-center text-3xl mb-3">Chest / Triceps / Shoulders</p>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center max-w-4xl">
          <div className="flex justify-center flex-col sm:flex-row sm:flex-wrap">
          <div className="table-wrap">
          <p className="flex justify-center text-1xl font-extrabold mb-2" >Barbell Bench</p>
  <Table className="w-60 bg-slate-800 rounded-xl mx-4 table-wrap table-color">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[80px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>14</TableCell>
      <TableCell>115lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >10</TableCell>
      <TableCell>120lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>8</TableCell>
      <TableCell>125lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>130lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>5</TableCell>
      <TableCell>135lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>4</TableCell>
      <TableCell>140lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2" >Barbell Shoulder Press</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[80px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>12</TableCell>
      <TableCell>55lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >10</TableCell>
      <TableCell>55lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>10</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>10</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>6</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>5</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2" >Cable Pushdowns</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
  <TableHeader>
<TableRow>
      <TableHead className="w-[80px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>20</TableCell>
      <TableCell>55lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >20</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>12</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>11</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>10</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>8</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2" >Close Grip Barbell Bench</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[80px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>10</TableCell>
      <TableCell>75lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >8</TableCell>
      <TableCell>80lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>6</TableCell>
      <TableCell>85lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>85lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>4</TableCell>
      <TableCell>90lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>3</TableCell>
      <TableCell>90lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2">Barbell Shrugs</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[80px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>6</TableCell>
      <TableCell>155lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >6</TableCell>
      <TableCell>160lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>5</TableCell>
      <TableCell>165lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>170lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>4</TableCell>
      <TableCell>170lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>3</TableCell>
      <TableCell>175lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-1xl font-extrabold mb-2">Flys</p>
<Table className="w-60 bg-slate-800 rounded-xl mx-4 table-color">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[80px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>18</TableCell>
      <TableCell>7.5lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >17</TableCell>
      <TableCell>7.5lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>12</TableCell>
      <TableCell>10lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>12</TableCell>
      <TableCell>10lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>10</TableCell>
      <TableCell>12.5lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>8</TableCell>
      <TableCell>12.5lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
</div>
</div>
</div>
</>
    );
  };