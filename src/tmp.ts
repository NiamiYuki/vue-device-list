const arr = [] as it[]
arr.push({ name: '123' })

interface it {
  name: string
}

function func(abj: it) {}

func(arr[0])
