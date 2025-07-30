type order = {
  person: {
    fullName: string;
    citizenship: string;
    passport: string;
    sex: 'Женский' | 'Мужской';
    dateOfBirth: string;
    includedInNRS: boolean;
  };
  application: {
    type: string;
    qualification: string;
    platform: string;
    representative: string;
    exam: {
      status: string;
      updated: string;
    };
    marks: string | string[];
  };
  services: {
    training: {
      modules: {
        name: string;
        cost: number;
      }[];
      payd: number;
    };
    fee: {
      cost: number;
      payd: number;
    };
  };
  details: {
    platform: string;
    dateOfExam: string;
    typeOfRecord: string;
  };
};

const orders: { [id: string]: order } = {
  '1909': {
    person: {
      fullName: 'Иванов Иван Иванович',
      citizenship: 'Российская Федерация',
      passport: '1234/123456',
      sex: 'Мужской',
      dateOfBirth: '1990-01-01',
      includedInNRS: false,
    },
    application: {
      type: 'Первичная сдача',
      qualification:
        'Главный инженер проекта (специалист по организации инженерных изысканий) (7 уровень квалификации)',
      platform: 'Общество с ограниченной ответственностью «Площадка 1»',
      representative: 'Агент 1',
      exam: {
        status: 'Экзамен пройден',
        updated: '2025-03-25T12:14:00',
      },
      marks: [
        'Документы на оплату готовы',
        'Документы разнесены',
        'Документы расписаны',
        'Оплачено',
      ],
    },
    services: {
      training: {
        modules: [
          {
            name: 'Тест',
            cost: 20000,
          },
          {
            name: 'Задачи',
            cost: 0,
          },
        ],
        payd: 20000,
      },
      fee: {
        cost: 23100,
        payd: 23100,
      },
    },
    details: {
      platform: 'Общество с ограниченной ответственностью «ПРОФСПЕЦУПРАВЛЕНИЕ»',
      dateOfExam: '2025-03-24T13:00:00',
      typeOfRecord: 'Запись',
    },
  },
};

const getOrderById = (id: string): order | undefined => {
  return structuredClone(orders[id]);
};

export default getOrderById;
