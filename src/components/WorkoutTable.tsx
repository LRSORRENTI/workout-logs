import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  export default function WorkoutTable() {
    return (
        <div className="flex justify-center bg-indigo-500">
          <div className="flex justify-center flex-col md:flex-row md:flex-wrap">
          <div className="table-wrap">
          <p className="flex justify-center text-2xl font-extrabold mb-1" >Barbell Curls</p>
  <Table className="w-80 bg-slate-800 rounded-xl mx-4">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>10</TableCell>
      <TableCell>40lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >8</TableCell>
      <TableCell>50lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>6</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>4</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>3</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-2xl font-extrabold mb-1" >Lat Pulldowns</p>
<Table className="w-80 bg-slate-800 rounded-xl mx-4">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>10</TableCell>
      <TableCell>40lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >8</TableCell>
      <TableCell>50lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>6</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>4</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>3</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-2xl font-extrabold mb-1" >Barbell Rows</p>
<Table className="w-80 bg-slate-800 rounded-xl mx-4">
  <TableHeader>
<TableRow>
      <TableHead className="w-[100px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>10</TableCell>
      <TableCell>40lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >8</TableCell>
      <TableCell>50lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>6</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>4</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>3</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-2xl font-extrabold mb-1" >Concentration Curls</p>
<Table className="w-80 bg-slate-800 rounded-xl mx-4">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>10</TableCell>
      <TableCell>40lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >8</TableCell>
      <TableCell>50lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>6</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>4</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>3</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-2xl font-extrabold mb-1">Hammer Curls</p>
<Table className="w-80 bg-slate-800 rounded-xl mx-4">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>10</TableCell>
      <TableCell>40lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >8</TableCell>
      <TableCell>50lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>6</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>4</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>3</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
<div className="table-wrap">
<p className="flex justify-center text-2xl font-extrabold mb-1" >Close Grip Barbell Curls</p>
<Table className="w-80 bg-slate-800 rounded-xl mx-4">
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Set</TableHead>
      <TableHead>Reps</TableHead>
      <TableHead>Weight</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium ml">1</TableCell>
      <TableCell>10</TableCell>
      <TableCell>40lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell >8</TableCell>
      <TableCell>50lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>6</TableCell>
      <TableCell>60lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>5</TableCell>
      <TableCell>65lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>4</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">6</TableCell>
      <TableCell>3</TableCell>
      <TableCell>70lbs</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
</div>
</div>
    );
  };