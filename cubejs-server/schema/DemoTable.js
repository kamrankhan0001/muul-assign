cube(`DemoTable`, {
    sql: `SELECT * FROM public.demo_table`,
  
    measures: {
      value: {
        sql: `value`,
        type: `sum`,
      },
    },
  
    dimensions: {
      name: {
        sql: `name`,
        type: `string`,
      },
      timestamp: {
        sql: `timestamp`,
        type: `time`,
      },
    }
  });
  