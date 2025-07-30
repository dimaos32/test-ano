import cn from 'classnames';
import styles from './Order.module.css';
import humanizeDate from '../../utils/humanize-date';
import ensureArray from '../../utils/ensure-array';
import getOrderById from '../../mocks/orders';
import Container from '../Container';

type OrderBaseProps = {
  className?: string;
  id: string;
};

export default function Order({ className, id }: OrderBaseProps) {
  const order = getOrderById(id);

  if (!order) {
    return (
      <section className={cn(styles.order, className)}>
        <Container>
          <h1 className={styles.title}>
            Ошибка! <br />
            Заявка №{id} не найдена
          </h1>
        </Container>
      </section>
    );
  }

  const { person, application, services, details } = order;

  return (
    <section className={cn(styles.order, className)}>
      <Container>
        <h1 className={styles.title}>
          Заявка №{id} - {person.fullName}
        </h1>
        <div className={styles.grid}>
          <div className={styles.block}>
            <dl className={styles.list}>
              <div className={styles.record}>
                <dt className={styles.term}>Гражданство</dt>
                <dd className={styles.desc}>{person.citizenship}</dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Паспорт серия/номер</dt>
                <dd className={styles.desc}>{person.passport}</dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>пол</dt>
                <dd className={styles.desc}>{person.sex}</dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Дата рождения</dt>
                <dd className={styles.desc}>
                  <time dateTime={person.dateOfBirth}>
                    {humanizeDate(person.dateOfBirth)}
                  </time>
                </dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Включен в состав НРС</dt>
                <dd className={styles.desc}>
                  {person.includedInNRS ? 'Да' : 'Нет'}
                </dd>
              </div>
            </dl>
          </div>
          <div className={styles.block}>
            <dl className={styles.list}>
              <div className={styles.record}>
                <dt className={styles.term}>Тип заявки</dt>
                <dd className={styles.desc}>
                  <strong>{application.type}</strong>
                </dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Квалификация</dt>
                <dd className={styles.desc}>
                  <strong>{application.qualification}</strong>
                </dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Площадка</dt>
                <dd className={styles.desc}>
                  <strong>{application.platform}</strong>
                </dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Представитель</dt>
                <dd className={styles.desc}>
                  <strong>{application.representative}</strong>
                </dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Статус</dt>
                <dd className={styles.desc}>
                  {application.exam.updated}
                  <time dateTime={application.exam.updated}>
                    {humanizeDate(application.exam.updated)}
                  </time>
                </dd>
                <dd className={styles.desc}>
                  <strong>{application.exam.status}</strong>
                </dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Отметка готовности</dt>
                {ensureArray(application.marks).map((mark) => (
                  <dd className={styles.desc} key={mark}>
                    <strong>{mark}</strong>
                  </dd>
                ))}
              </div>
            </dl>
          </div>
          <div className={styles.block}>
            <h2 className={styles.subtitle}>Услуги</h2>
            <dl className={styles.list}>
              {ensureArray(services.training.modules).map((module) => (
                <div className={styles.record} key={module.name}>
                  <dt className={styles.term}>
                    Стоимость услуги: {module.name}
                  </dt>
                  <dd className={styles.desc}>
                    {module.cost.toLocaleString('ru-RU')} RUB
                  </dd>
                </div>
              ))}
              <div className={styles.record}>
                <dt className={styles.term}>
                  Стоимость услуги: Госпошлина ГИП И
                </dt>
                <dd className={styles.desc}>
                  {services.fee.cost.toLocaleString('ru-RU')} RUB
                </dd>
              </div>
              <div className={styles.row}>
                <div className={styles.record}>
                  <dt className={styles.term}>Обучение оплачено</dt>
                  <dd className={styles.desc}>
                    {services.training.payd} RUB из{' '}
                    {ensureArray(services.training.modules)
                      .reduce((total, module) => total + module.cost, 0)
                      .toLocaleString('ru-RU')}{' '}
                    RUB
                  </dd>
                </div>
                <div className={styles.record}>
                  <dt className={styles.term}>Пошлина оплачена</dt>
                  <dd className={styles.desc}>
                    {services.fee.payd} RUB из {services.fee.cost} RUB
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className={styles.block}>
            <h2 className={styles.subtitle}>Информация об экзамене</h2>
            <dl className={styles.list}>
              <div className={styles.record}>
                <dt className={styles.term}>Площадка</dt>
                <dd className={styles.desc}>{details.platform}</dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Дата экзамена</dt>
                <dd className={styles.desc}>
                  <time dateTime={details.dateOfExam}>
                    {humanizeDate(details.dateOfExam, true)}
                  </time>
                </dd>
              </div>
              <div className={styles.record}>
                <dt className={styles.term}>Тип записи</dt>
                <dd className={styles.desc}>{details.typeOfRecord}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
